import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { debounceTime, filter } from "rxjs";

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
    this.rechercheForm.valueChanges.pipe(
      filter(formValue => formValue.name?.length ? formValue.name.length >= 3 : false),
      debounceTime(500)
    ).subscribe({
      next: value => console.log(value)
    });
  }
}
