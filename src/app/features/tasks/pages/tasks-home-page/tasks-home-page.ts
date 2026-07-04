import { Component, inject } from '@angular/core';
import { NaturalTaskInput } from '../../components/natural-task-input/natural-task-input';
import { TaskForm } from '../../components/task-form/task-form';
import { TaskList } from '../../components/task-list/task-list';
import { CreateTaskData } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-home-page',
  imports: [NaturalTaskInput, TaskForm, TaskList],
  templateUrl: './tasks-home-page.html',
  styleUrl: './tasks-home-page.css',
})
export class TasksHomePage {
  private readonly taskService = inject(TasksService);

  readonly tasks = this.taskService.pendingTasks;

  addTask(title: string): void {
    this.taskService.addTask(title);
  }

  createTask(taskData: CreateTaskData): void {
    this.taskService.addTask(taskData);
  }

  completeTask(taskId: string): void {
    this.taskService.completeTask(taskId);
  }

  toggleImportant(taskId: string): void {
    this.taskService.toggleImportant(taskId);
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId);
  }
}
