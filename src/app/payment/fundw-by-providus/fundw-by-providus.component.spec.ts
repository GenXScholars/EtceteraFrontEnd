import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundwByProvidusComponent } from './fundw-by-providus.component';

describe('FundwByProvidusComponent', () => {
  let component: FundwByProvidusComponent;
  let fixture: ComponentFixture<FundwByProvidusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundwByProvidusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundwByProvidusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
