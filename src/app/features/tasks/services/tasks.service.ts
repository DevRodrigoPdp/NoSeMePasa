import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { TASKS_MOCK } from './tasks.mock';
import { CreateTaskData } from '../models/task.model';

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

  addTask(taskData: string | CreateTaskData): void {
  const now = new Date().toISOString();

  const data: CreateTaskData =
    typeof taskData === 'string'
      ? {
          title: taskData,
          description: '',
          category: 'other',
          priority: 'medium',
          dueDate: null,
          isImportant: false,
        }
      : taskData;

  const cleanTitle = data.title.trim();

  if (!cleanTitle) {
    return;
  }

  const newTask: Task = {
    id: crypto.randomUUID(),
    title: cleanTitle,
    description: data.description?.trim() || '',
    category: data.category,
    priority: data.priority,
    dueDate: data.dueDate,
    status: 'pending',
    isImportant: data.isImportant,
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
