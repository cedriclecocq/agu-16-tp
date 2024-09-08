import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  rechercheForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    isInstalled: new FormControl(false),
    isRenting: new FormControl(false),
    idReturning: new FormControl(false)
  })
  protected readonly JSON = JSON;

  ngOnInit(): void {
    this.rechercheForm.valueChanges.subscribe({
      next: value => console.log(value)
    });
  }
}
