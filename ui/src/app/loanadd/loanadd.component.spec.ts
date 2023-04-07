import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanaddComponent } from './loanadd.component';

describe('LoanaddComponent', () => {
  let component: LoanaddComponent;
  let fixture: ComponentFixture<LoanaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
