import { createReducer, on } from "@ngrx/store";
import { Task } from "../task.model";
import { addTask, updateTask, removeTask } from "./task.actions";

export interface TaskState {
    tasks: Task[];
}

export const initialState: TaskState = {
    tasks: [
        { id: '1', description: 'Learn Angular with CEPEDI TIC18 residency' },
        { id: '2', description: 'Learn NgRx with CEPEDI TIC18 residency'},
        { id: '3', description: 'Learn Redux with CEPEDI TIC18 residency'},]
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state : any, action : any) => ({
    ...state,
    tasks: [...state.tasks, action.task],
  })),
  on(removeTask, (state : any, action : any) => ({
    ...state,
    tasks: state.tasks.filter((t : any) => t.id !== action.id),
  })),
  on(updateTask, (state : any, action : any) => ({
    ...state,
    tasks: state.tasks.map((t : any) => {
      if (t.id === action.id) {
        return { ...t, description: action.newDescription };
      }
      return t;
    }),
  }))
);
