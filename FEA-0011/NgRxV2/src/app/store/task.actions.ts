import { createAction, props } from '@ngrx/store';
import { Task } from '../task.model';

export const addTask = createAction(
    '[Task] Add Task',
    props<{ task: Task }>()
);

export const removeTask = createAction(
    '[Task] Remove Task',
    props<{ id: string }>()
);

export const updateTask = createAction(
  '[Task] Update Task',
  props<{ id: string; newDescription: string }>()
);
