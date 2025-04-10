import { Component, inject} from '@angular/core';
import { TaskService } from '../shared/service/task.service';

@Component({
  selector: 'app-task-list',
  imports: [],
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
private taskService = inject(TaskService);

tasks = this.taskService.getTask();
}
