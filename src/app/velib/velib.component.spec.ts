import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelibComponent } from './velib.component';

describe('VelibComponent', () => {
  let component: VelibComponent;
  let fixture: ComponentFixture<VelibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelibComponent]
    });
    fixture = TestBed.createComponent(VelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
