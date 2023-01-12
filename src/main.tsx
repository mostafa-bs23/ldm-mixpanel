import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './store/reducers/events';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from './pages/Events';
import CustomEvents from './pages/CustomEvents';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/custom-events" element={<CustomEvents />} />
            <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  ,
)