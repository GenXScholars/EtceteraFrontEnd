import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundwByGtBnkComponent } from './fundw-by-gt-bnk.component';

describe('FundwByGtBnkComponent', () => {
  let component: FundwByGtBnkComponent;
  let fixture: ComponentFixture<FundwByGtBnkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundwByGtBnkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundwByGtBnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
