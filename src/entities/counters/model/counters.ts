import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { useSelector } from "react-redux";

type Counter = {
  title: string;
  description?: string;
  count: number;
};

type Counters = Counter[];

const initialState: Counters = [
  { title: "pushups", description: "pushups", count: 0 },
];

const countersModel = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<number>) => {
      state[payload].count += 1;
    },
    addCounter: (state, { payload }: PayloadAction<Counter>) => {
      state.unshift(payload);
    },
  },
});

export const countersReducer = countersModel.reducer;
export const { increment, addCounter } = countersModel.actions;

export const countersSelector = (state: RootState) => state.counters;

export const useCounter = (id: number) =>
  useSelector(createSelector(countersSelector, (counters) => counters[id]));
