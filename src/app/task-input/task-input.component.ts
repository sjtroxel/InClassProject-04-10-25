import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TaskService } from '../shared/service/task.service';

@Component({
  selector: 'app-task-input',
  imports: [],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})

// cursor parking lot. its more of a lot than a garage.


export class TaskInputComponent {
  form = viewChild<ElementRef<HTMLFormElement>>('form')

  taskService = inject(TaskService)
  tasks = this.taskService.tasks;

  addTaskHandler(taskName: string) {
    if (taskName) {
      this.taskService.addTask(taskName);
     this.form()?.nativeElement.reset()
    }
  }

}
