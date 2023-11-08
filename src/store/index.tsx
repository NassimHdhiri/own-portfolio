import { configureStore } from '@reduxjs/toolkit';
import PortfolioReducer from './PortfolioReducer';

// Define the type for your state
export interface AppState {
  home: ReturnType<typeof PortfolioReducer>;
}

const store = configureStore<AppState>({
  reducer: {
    home: PortfolioReducer,
  },
});

export default store;
