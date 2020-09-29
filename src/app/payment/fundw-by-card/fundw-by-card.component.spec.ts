import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundwByCardComponent } from './fundw-by-card.component';

describe('FundwByCardComponent', () => {
  let component: FundwByCardComponent;
  let fixture: ComponentFixture<FundwByCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundwByCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundwByCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
