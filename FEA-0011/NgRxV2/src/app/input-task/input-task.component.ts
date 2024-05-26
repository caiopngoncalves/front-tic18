import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TaskState } from '../store/task.reducer';
import { addTask } from '../store/task.actions';
import { Task } from '../task.model';

@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent {
  newTask = '';

  constructor(private store:Store<TaskState>) { }

  addTask() {

    const newTask: Task = {
      id: this.generateId(),
      description: this.newTask,
    };

    this.store.dispatch(addTask({task:newTask}));

  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
