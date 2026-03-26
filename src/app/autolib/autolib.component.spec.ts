import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolibComponent } from './autolib.component';

describe('AutolibComponent', () => {
  let component: AutolibComponent;
  let fixture: ComponentFixture<AutolibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutolibComponent]
    });
    fixture = TestBed.createComponent(AutolibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
