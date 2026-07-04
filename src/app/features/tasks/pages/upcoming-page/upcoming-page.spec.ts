import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingPage } from './upcoming-page';

describe('UpcomingPage', () => {
  let component: UpcomingPage;
  let fixture: ComponentFixture<UpcomingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
