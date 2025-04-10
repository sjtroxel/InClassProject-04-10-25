import { Directive, effect, inject, Input, input } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../task.model';


@Directive({
  standalone: true,
  selector: 'input[appStrikeThrough]',
  host: {'(change)': 'toggleTaskHandler($event)'},
})
export class StrikeThroughDirective {
  appStrikeThrough = input<Task>();
  taskService = inject(TaskService);

  constructor () {
    effect(() => {
      console.log(this.appStrikeThrough());
    });
  }
  
    toggleTaskHandler(event: Event) {
      // this.taskService.toggleTaskCompletion(t)
      const isChecked = (event.target as HTMLInputElement).checked;
      console.log(isChecked);
      console.log(this.appStrikeThrough());

      this.taskService.toggleTaskCompletion(this.appStrikeThrough()!)
      console.log('event connection')
    }
  }





