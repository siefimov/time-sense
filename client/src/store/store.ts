import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

// Create the root reducer independently to obtaine the RootState type
const rootReducer = combineReducers({
  users: authReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
