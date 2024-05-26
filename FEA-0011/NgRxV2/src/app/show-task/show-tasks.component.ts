import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskState } from '../store/task.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTask } from '../store/task.seletors';
import { Task } from '../task.model';
import { updateTask, removeTask } from '../store/task.actions';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditTaskModalComponent } from '../edit-task-modal/edit-task-modal.component';

@Component({
  selector: 'app-show-tasks',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  providers: [MatDialog],
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css'],
})
export class ShowTasksComponent {
  tasks: Task[] = [{ id: '1', description: 'Description 1' }];
  tasks$!: Observable<TaskState>;
  selectedTask: Task | null = null;

  constructor(
    private store: Store<{ tasks: TaskState }>,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.tasks$ = this.store.select(selectTask);
    this.tasks$.subscribe((t: TaskState) => {
      this.tasks = t.tasks;
    });
  }

  selectTask(task: Task) {
    this.selectedTask = task;
    this.openEditModal(task);
  }

  openEditModal(task: Task) {
    const dialogRef = this.dialog.open(EditTaskModalComponent, {
      width: '600px',
      data: { task: task },
    });

    dialogRef.afterClosed().subscribe((newDescription) => {
      if (newDescription) {
        this.store.dispatch(
          updateTask({ id: task.id, newDescription: newDescription })
        );
      }
    });
  }

  removeTask(id: string) {
    this.store.dispatch(removeTask({ id: id }));
  }

}
