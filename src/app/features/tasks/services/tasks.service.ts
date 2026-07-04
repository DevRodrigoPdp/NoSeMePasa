import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { TASKS_MOCK } from './tasks.mock';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly tasksSignal = signal<Task[]>(TASKS_MOCK);

  readonly tasks = this.tasksSignal.asReadonly();

  readonly pendingTasks = computed(() =>
    this.tasksSignal().filter((task) => task.status === 'pending'),
  );

  readonly upcomingTasks = computed(() => {
    const today = this.getToday();

    return this.pendingTasks().filter((task) => task.dueDate && task.dueDate > today);
  });

  readonly completedTasks = computed(() =>
    this.tasksSignal().filter((task) => task.status === 'completed'),
  );

  readonly todayTasks = computed(() => {
    const today = this.getToday();

    return this.pendingTasks().filter((task) => task.dueDate === today);
  });

  readonly importantTasks = computed(() => this.pendingTasks().filter((task) => task.isImportant));

  readonly noDateTasks = computed(() => this.pendingTasks().filter((task) => !task.dueDate));

  readonly recommendedTask = computed(() => {
    const today = this.getToday();
    const pendingTasks = this.pendingTasks();

    const importantTodayTask = pendingTasks.find(
      (task) => task.isImportant && task.dueDate === today,
    );

    if (importantTodayTask) {
      return importantTodayTask;
    }

    const todayTask = pendingTasks.find((task) => task.dueDate === today);

    if (todayTask) {
      return todayTask;
    }

    const importantTask = pendingTasks.find((task) => task.isImportant);

    if (importantTask) {
      return importantTask;
    }

    return pendingTasks[0] ?? null;
  });

  completeTask(taskId: string): void {
    const now = new Date().toISOString();

    this.tasksSignal.update((tasks) =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: 'completed',
              updatedAt: now,
            }
          : task,
      ),
    );
  }

  private getToday(): string {
    return new Date().toISOString().slice(0, 10);
  }

  deleteTask(taskId: string): void {
    this.tasksSignal.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  addTask(title: string): void {
    const cleanTitle = title.trim();

    if (!cleanTitle) {
      return;
    }
    const now = new Date().toISOString();

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description: undefined,
      category: 'other',
      priority: 'medium',
      dueDate: null,
      status: 'pending',
      isImportant: false,
      createdAt: now,
      updatedAt: now,
    };

    this.tasksSignal.update((tasks) => [newTask, ...tasks]);
  }

  toggleImportant(taskId: string): void {
    const now = new Date().toISOString();

    this.tasksSignal.update((tasks) =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              isImportant: !task.isImportant,
              updatedAt: now,
            }
          : task,
      ),
    );
  }
}
