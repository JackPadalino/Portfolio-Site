import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./viewSlice";
import navReducer from "./navSlice";

const store = configureStore({
  reducer: {
    view: viewReducer,
    nav: navReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
