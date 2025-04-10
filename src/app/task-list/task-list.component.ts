import { Component, effect, inject, OnInit} from '@angular/core';
import { TaskService } from '../shared/service/task.service';
import { StrikeThroughDirective } from '../shared/directives/strike-through.directive';

@Component({
  selector: 'app-task-list',
  imports: [StrikeThroughDirective],
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
private taskService = inject(TaskService);

tasks = this.taskService.getTask();

constructor() {
  effect(() => {
    const taskList = this.tasks()
    console.log(taskList);
  })

}

ngOnInit(): void {
  console.log(this.tasks());
}
}
