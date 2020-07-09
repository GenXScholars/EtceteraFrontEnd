import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTransactionsDetailsComponent } from './user-transactions-details.component';

describe('UserTransactionsDetailsComponent', () => {
  let component: UserTransactionsDetailsComponent;
  let fixture: ComponentFixture<UserTransactionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTransactionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTransactionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
