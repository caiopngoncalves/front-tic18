import { TaskState } from "./task.reducer";

export const selectTask = (state: {tasks: TaskState}) => state.tasks;
