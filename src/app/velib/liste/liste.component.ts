import { Component } from '@angular/core';
import { Station } from "../station.type";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  public stations: Station[] = [
    {
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
    },
    {
      "id": 37874517,
      "name": "Saint-Sulpice",
      "lat": 48.85165383178419,
      "lon": 2.3308077827095985,
      "capacity": 21,
      "stationCode": "6003",
      "numBikesAvailable": 11,
      "numMechanicalBikesAvailable": 9,
      "numEbikeBikesAvailable": 2,
      "numDocksAvailable": 6,
      "isInstalled": true,
      "isReturning": true,
      "isRenting": true,
      "lastReported": 1699548415
    },
    {
      "id": 16659964929,
      "name": "Arsène Houssaye - Friedland",
      "lat": 48.874510616163,
      "lon": 2.2994716674148,
      "capacity": 0,
      "stationCode": "8201",
      "numBikesAvailable": 0,
      "numMechanicalBikesAvailable": 0,
      "numEbikeBikesAvailable": 0,
      "numDocksAvailable": 0,
      "isInstalled": false,
      "isReturning": false,
      "isRenting": false,
      "lastReported": 1699548453
    }
  ];
}
