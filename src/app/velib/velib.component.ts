import { Component } from '@angular/core';
import { RechercheValue } from "./recherche-value";

@Component({
  selector: 'app-velib',
  templateUrl: './velib.component.html',
  styleUrls: ['./velib.component.css']
})
export class VelibComponent {
  protected currentCriteres: Partial<RechercheValue>| undefined;

  handleCriteres(values: Partial<RechercheValue>) {
    this.currentCriteres = values;
  }
}
