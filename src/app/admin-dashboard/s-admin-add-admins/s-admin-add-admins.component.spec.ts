import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAdminAddAdminsComponent } from './s-admin-add-admins.component';

describe('SAdminAddAdminsComponent', () => {
  let component: SAdminAddAdminsComponent;
  let fixture: ComponentFixture<SAdminAddAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAdminAddAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAdminAddAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
