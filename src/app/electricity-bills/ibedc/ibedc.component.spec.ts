import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBEDCComponent } from './ibedc.component';

describe('IBEDCComponent', () => {
  let component: IBEDCComponent;
  let fixture: ComponentFixture<IBEDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBEDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBEDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
