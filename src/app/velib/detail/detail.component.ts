import {Component, OnInit} from '@angular/core';
import { Station } from "../station.type";
import { VelibService } from "../services/velib.service";
import {catchError, ignoreElements, Observable, of, shareReplay} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public station: Observable<Station> | undefined;
  public error: Observable<any> | undefined;

  constructor(private velibService: VelibService) {}

  ngOnInit() {
    this.station = this.velibService.getById(2515829865).pipe(
      shareReplay(1)
    );
    this.error = this.station.pipe(
      ignoreElements(),
      catchError((err) => of(err))
    )
  }
}
