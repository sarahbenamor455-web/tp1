import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  taskList: Task[] = [];
  isLoading = false;

  constructor(private taskService: TaskService) {
    this.taskList = this.taskService.getTasks();
  }
}
