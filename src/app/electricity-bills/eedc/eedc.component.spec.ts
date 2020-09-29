import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EEDCComponent } from './eedc.component';

describe('EEDCComponent', () => {
  let component: EEDCComponent;
  let fixture: ComponentFixture<EEDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
