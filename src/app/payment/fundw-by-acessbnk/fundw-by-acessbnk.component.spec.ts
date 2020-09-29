import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundwByAcessbnkComponent } from './fundw-by-acessbnk.component';

describe('FundwByAcessbnkComponent', () => {
  let component: FundwByAcessbnkComponent;
  let fixture: ComponentFixture<FundwByAcessbnkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundwByAcessbnkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundwByAcessbnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
