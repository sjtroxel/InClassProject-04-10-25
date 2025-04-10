import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskInputComponent } from './task-input/task-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListComponent, TaskInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inClassProject04-10-25';
}
