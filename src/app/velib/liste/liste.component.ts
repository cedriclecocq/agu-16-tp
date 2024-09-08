import { Component } from '@angular/core';
import { Station } from "../station.type";
import { VelibService } from "../services/velib.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  public stations: Station[];

  constructor(private velibService: VelibService) {
    this.stations = this.velibService.getList();
  }
}
