import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from './features/notification';

export const makeStore = () => {
  return configureStore({
    reducer: {
      notification: notificationSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
