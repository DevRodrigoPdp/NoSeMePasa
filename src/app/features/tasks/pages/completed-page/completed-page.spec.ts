import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPage } from './completed-page';

describe('CompletedPage', () => {
  let component: CompletedPage;
  let fixture: ComponentFixture<CompletedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
