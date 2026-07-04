import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { TaskList } from '../../components/task-list/task-list';


@Component({
  selector: 'app-tasks-home-page',
  imports: [FormsModule, TaskList],
  templateUrl: './tasks-home-page.html',
  styleUrl: './tasks-home-page.css',
})
export class TasksHomePage {
  private readonly taskService = inject(TasksService);

  readonly tasks = this.taskService.pendingTasks;

  taskTitle = '';

  addTask(): void {
    const cleanTitle = this.taskTitle.trim();

    if (!cleanTitle) {
      return;
    }

    this.taskService.addTask(cleanTitle);
    this.taskTitle = '';
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