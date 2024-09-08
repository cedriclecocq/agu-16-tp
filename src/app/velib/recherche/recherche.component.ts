import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { debounceTime, filter } from "rxjs";
import { RechercheValue } from "../recherche-value";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  rechercheForm;
  protected readonly JSON = JSON;

  values: EventEmitter<Partial<RechercheValue>> = new EventEmitter<Partial<RechercheValue>>();

  constructor(private fb: FormBuilder) {
    this.rechercheForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      isInstalled: [false, Validators.required],
      isRenting: [false, Validators.required],
      idReturning: [false, Validators.required]
    });
  }

  ngOnInit(): void {
    this.rechercheForm.valueChanges.pipe(
      filter(formValue => formValue.name?.length ? formValue.name.length >= 3 : false),
      debounceTime(500)
    ).subscribe({
      next: value => this.values.emit(value)
    });

    this.values.subscribe(value => console.log(`obs1 : ${value.name}`));
    this.values.subscribe(value => console.log(`obs2 : ${value.name}`));
  }
}
