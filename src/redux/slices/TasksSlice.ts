import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {TasksSliceProp} from '../../interfaces';

const initialState: TasksSliceProp = {
  tasks: [],
};

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const {addTask} = TasksSlice.actions;
export default TasksSlice.reducer;
