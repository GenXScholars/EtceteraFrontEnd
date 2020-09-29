import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundwByFirstBnkComponent } from './fundw-by-first-bnk.component';

describe('FundwByFirstBnkComponent', () => {
  let component: FundwByFirstBnkComponent;
  let fixture: ComponentFixture<FundwByFirstBnkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundwByFirstBnkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundwByFirstBnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
