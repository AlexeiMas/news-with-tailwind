import {create, StateCreator, StoreApi, UseBoundStore} from "zustand";
import {devtools} from "zustand/middleware";

export const createStore = <T>(
  cb: StateCreator<T>,
  name: string
): UseBoundStore<StoreApi<T>> => {
  if (import.meta.env.DEV) {
    return create(
      devtools(cb, {name})
    );
  }
  return create(cb);
};