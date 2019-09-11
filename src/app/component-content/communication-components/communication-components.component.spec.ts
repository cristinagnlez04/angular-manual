import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationComponentsComponent } from './communication-components.component';

describe('CommunicationComponentsComponent', () => {
  let component: CommunicationComponentsComponent;
  let fixture: ComponentFixture<CommunicationComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
