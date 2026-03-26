import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Station } from "../station.type";
import { VelibService } from "../services/velib.service";
import { RechercheValue } from "../recherche-value";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnChanges, OnInit {
  private allStations: Station[] | undefined;
  public stations: Station[] | undefined;

  @Input()
  criteres: Partial<RechercheValue> | undefined;

  constructor(private velibService: VelibService) {}

  ngOnInit() {
    this.velibService.getList().subscribe(value => this.allStations = value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['criteres'].currentValue && this.allStations) {
      const criteres: RechercheValue = changes['criteres'].currentValue as RechercheValue;
      this.stations = this.allStations.filter(station => {
        if(criteres.isInstalled && !station.isInstalled) return false;
        if(criteres.isRenting && !station.isRenting) return false;
        if(criteres.idReturning && !station.isReturning) return false;
        if(criteres.name && !station.name.toLowerCase().includes(criteres.name.toLowerCase())) return false;
        return true;
      });
    }
  }
}
