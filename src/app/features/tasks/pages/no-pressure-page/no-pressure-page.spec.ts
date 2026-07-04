import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPressurePage } from './no-pressure-page';

describe('NoPressurePage', () => {
  let component: NoPressurePage;
  let fixture: ComponentFixture<NoPressurePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoPressurePage],
    }).compileComponents();

    fixture = TestBed.createComponent(NoPressurePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
