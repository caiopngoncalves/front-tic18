import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { TaskState } from './store/task.reducer';
import { Observable } from 'rxjs';
import { selectTask } from './store/task.seletors';
import { InputTaskComponent } from './input-task/input-task.component';
import { ShowTasksComponent } from './show-task/show-tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTaskComponent, ShowTasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRxV2';
  tasks$: Observable<TaskState>;

  constructor(private store: Store<{tasks: TaskState}>){
    this.tasks$ = store.select(selectTask);
  }
}