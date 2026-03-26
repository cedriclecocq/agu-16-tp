import {Component, OnInit} from '@angular/core';
import { Station } from "../station.type";
import { VelibService } from "../services/velib.service";
import {catchError, ignoreElements, Observable, of, shareReplay} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public station: Observable<Station> | undefined;
  public error: Observable<any> | undefined;
  public idStation: number | undefined;

  constructor(
    private velibService: VelibService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idStation = Number.parseInt(this.route.snapshot.params['id']);
    this.station = this.velibService.getById(this.idStation).pipe(
      shareReplay(1)
    );
    this.error = this.station.pipe(
      ignoreElements(),
      catchError((err) => of(err))
    )
  }
}
