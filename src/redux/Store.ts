import {configureStore} from '@reduxjs/toolkit';
import TasksSlice from './slices/TasksSlice';
import {StoreProp} from '../interfaces';

const store = configureStore<StoreProp>({
  reducer: {
    tasks: TasksSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
