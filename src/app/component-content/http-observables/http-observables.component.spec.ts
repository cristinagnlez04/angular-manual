import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPObservablesComponent } from './http-observables.component';

describe('HTTPObservablesComponent', () => {
  let component: HTTPObservablesComponent;
  let fixture: ComponentFixture<HTTPObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTTPObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
