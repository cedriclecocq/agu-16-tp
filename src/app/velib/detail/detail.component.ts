import { Component } from '@angular/core';
import { Station } from "../station.type";
import { VelibService } from "../services/velib.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  public station: Station;

  constructor(private velibService: VelibService) {
    this.station = this.velibService.getById(17278902806);
  }
}
