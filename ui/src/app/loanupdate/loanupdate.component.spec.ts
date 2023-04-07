import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanupdateComponent } from './loanupdate.component';

describe('LoanupdateComponent', () => {
  let component: LoanupdateComponent;
  let fixture: ComponentFixture<LoanupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
