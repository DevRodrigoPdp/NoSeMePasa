import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantPage } from './important-page';

describe('ImportantPage', () => {
  let component: ImportantPage;
  let fixture: ComponentFixture<ImportantPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportantPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportantPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
