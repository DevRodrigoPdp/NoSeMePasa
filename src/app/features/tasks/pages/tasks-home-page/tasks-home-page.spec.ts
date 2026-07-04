import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksHomePage } from './tasks-home-page';

describe('TasksHomePage', () => {
  let component: TasksHomePage;
  let fixture: ComponentFixture<TasksHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksHomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
