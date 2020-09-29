import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EKEDCComponent } from './ekedc.component';

describe('EKEDCComponent', () => {
  let component: EKEDCComponent;
  let fixture: ComponentFixture<EKEDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EKEDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EKEDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
