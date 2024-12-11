import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewComponentsComponent } from './last-few-components.component';

describe('LastFewComponentsComponent', () => {
  let component: LastFewComponentsComponent;
  let fixture: ComponentFixture<LastFewComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastFewComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastFewComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
