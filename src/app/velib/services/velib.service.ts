import { Injectable } from '@angular/core';
import {Station} from "../station.type";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {combineLatest, map, Observable, throwError} from "rxjs";
import {StationsApi} from "./stations-api";
import {StatusApi} from "./status-api";

@Injectable({
  providedIn: 'root'
})
export class VelibService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Station[]> {
    return combineLatest({
      stations: this.http.get<StationsApi[]>(`http://localhost:3000/velib-stations/`),
      status: this.http.get<StatusApi[]>(`http://localhost:3000/velib-status/`)
    }).pipe(
      map(value => {
        const result:Station[] = [];
        for (let i = 0; i < value.stations.length; i++) {
          result.push({
            id: value.stations[i].id,
            name: value.stations[i].name,
            lat: value.stations[i].lat,
            lon: value.stations[i].lon,
            capacity: value.stations[i].capacity,
            stationCode: value.stations[i].stationCode,
            numBikesAvailable: value.status[i].numBikesAvailable,
            numMechanicalBikesAvailable: value.status[i].num_bikes_available_types[0].mechanical,
            numEbikeBikesAvailable: value.status[i].num_bikes_available_types[1].ebike,
            numDocksAvailable: value.status[i].numDocksAvailable,
            isInstalled: value.status[i].is_installed === 1,
            isReturning: value.status[i].is_returning === 1,
            isRenting: value.status[i].is_renting === 1,
            lastReported: value.status[i].last_reported,
          });
        }
        return result;
      })
    )
  }

  getById(id: number): Station {
    return {
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
    };
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('client-side error: ${error.error}');
    } else {
      console.error( `backend error code ${error.status}, message: ${error.error}`);
    }
    return throwError(() => new Error('message utilisateur'));
  }
}
