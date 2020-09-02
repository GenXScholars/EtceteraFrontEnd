/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatabundleComponent } from './databundle.component';

describe('DatabundleComponent', () => {
  let component: DatabundleComponent;
  let fixture: ComponentFixture<DatabundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
