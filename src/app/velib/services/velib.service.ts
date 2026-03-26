import { Injectable } from '@angular/core';
import {Station} from "../station.type";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, combineLatest, map, Observable, throwError} from "rxjs";
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

  getById(id: number): Observable<Station> {
    return combineLatest({
      stations: this.http.get<StationsApi>(`http://localhost:3000/velib-stations/${id}`),
      status: this.http.get<StatusApi>(`http://localhost:3000/velib-status/${id}`)
    }).pipe(
      catchError(this.handleError),
      map(value => ({
        id: value.stations.id,
        name: value.stations.name,
        lat: value.stations.lat,
        lon: value.stations.lon,
        capacity: value.stations.capacity,
        stationCode: value.stations.stationCode,
        numBikesAvailable: value.status.numBikesAvailable,
        numMechanicalBikesAvailable: value.status.num_bikes_available_types[0].mechanical,
        numEbikeBikesAvailable: value.status.num_bikes_available_types[1].ebike,
        numDocksAvailable: value.status.numDocksAvailable,
        isInstalled: value.status.is_installed === 1,
        isReturning: value.status.is_returning === 1,
        isRenting: value.status.is_renting === 1,
        lastReported: value.status.last_reported
      }))
    );
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
