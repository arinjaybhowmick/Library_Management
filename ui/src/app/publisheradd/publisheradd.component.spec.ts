import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisheraddComponent } from './publisheradd.component';

describe('PublisheraddComponent', () => {
  let component: PublisheraddComponent;
  let fixture: ComponentFixture<PublisheraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisheraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisheraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
