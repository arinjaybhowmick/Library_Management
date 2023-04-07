import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherupdateComponent } from './publisherupdate.component';

describe('PublisherupdateComponent', () => {
  let component: PublisherupdateComponent;
  let fixture: ComponentFixture<PublisherupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
