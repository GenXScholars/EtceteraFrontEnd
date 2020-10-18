import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewMerchantsComponent } from './admin-view-merchants.component';

describe('AdminViewMerchantsComponent', () => {
  let component: AdminViewMerchantsComponent;
  let fixture: ComponentFixture<AdminViewMerchantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewMerchantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
