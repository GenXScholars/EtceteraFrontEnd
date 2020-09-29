import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IKEDCComponent } from './ikedc.component';

describe('IKEDCComponent', () => {
  let component: IKEDCComponent;
  let fixture: ComponentFixture<IKEDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IKEDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IKEDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
