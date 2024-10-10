//copied from https://github.com/matthewp/haunted/blob/main/src/use-state.ts

type NewState<T> = T | ((previousState?: T) => T);
export type StateUpdater<T> = (value: NewState<T>) => void;
