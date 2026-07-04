import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  readonly tasks = input.required<Task[]>();

  readonly complete = output<string>();
  readonly toggleImportant = output<string>();
  readonly delete = output<string>();
}