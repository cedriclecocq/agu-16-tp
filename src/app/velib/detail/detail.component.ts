import { Component } from '@angular/core';
import {Station} from "../station.type";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  public station: Station = {
    "id": 17278902806,
    "name": "Rouget de L'isle - Watteau",
    "lat": 48.778192750803,
    "lon": 2.3963020229163,
    "capacity": 20,
    "stationCode": "44015",
    "numBikesAvailable": 12,
    "numMechanicalBikesAvailable": 4,
    "numEbikeBikesAvailable": 8,
    "numDocksAvailable": 6,
    "isInstalled": true,
    "isReturning": true,
    "isRenting": true,
    "lastReported": 1699548492
  }

}
