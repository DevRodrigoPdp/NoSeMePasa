import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalTaskInput } from './natural-task-input';

describe('NaturalTaskInput', () => {
  let component: NaturalTaskInput;
  let fixture: ComponentFixture<NaturalTaskInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalTaskInput],
    }).compileComponents();

    fixture = TestBed.createComponent(NaturalTaskInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
