import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDatePage } from './no-date-page';

describe('NoDatePage', () => {
  let component: NoDatePage;
  let fixture: ComponentFixture<NoDatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoDatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(NoDatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
