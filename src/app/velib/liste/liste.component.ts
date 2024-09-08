import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Station } from "../station.type";
import { VelibService } from "../services/velib.service";
import { RechercheValue } from "../recherche-value";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnChanges {
  public stations: Station[];

  @Input()
  criteres: Partial<RechercheValue> | undefined;

  constructor(private velibService: VelibService) {
    this.stations = this.velibService.getList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['criteres'].currentValue);
  }
}
