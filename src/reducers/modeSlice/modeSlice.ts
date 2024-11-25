import { createSlice } from "@reduxjs/toolkit";
import { modeSliceKey } from "./sliceKey";
import { Mode } from "../../types";

type Action = {
  payload: Mode | null;
  type: string;
};

type ModeSlice = {
  mode: Mode | null;
};

const initialState: ModeSlice = {
  mode: Mode.MonthlyByDown,
};

export const modeSlice = createSlice({
  name: modeSliceKey,
  initialState,
  reducers: {
    reset: (state) => (state = initialState),
    changeMode: (state, action: Action) => {
      state.mode = action.payload;
    },
  },
});

export const modeActions = modeSlice.actions;

export const modeSelector = (state: { [modeSliceKey]: ModeSlice }) =>
  state[modeSliceKey];
