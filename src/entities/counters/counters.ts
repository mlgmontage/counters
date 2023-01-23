import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { useSelector } from "react-redux";

type Counter = {
  title: string;
  description: string;
  count: number;
};

type Counters = Counter[];

const initialState: Counters = [];

const countersModel = createSlice({
  name: "counters",
  initialState,
  reducers: {},
});

export const countersReducer = countersModel.reducer;

export const countersSelector = (state: RootState) => state.counters;

export const useCounter = (id: number) =>
  useSelector(createSelector(countersSelector, (counters) => counters[id]));
