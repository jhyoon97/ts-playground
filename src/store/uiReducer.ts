import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface State {
  theme: string;
}

const slice = createSlice({
  name: "auth",
  initialState: {
    theme: "default",
  } as State,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = slice.actions;

export default slice.reducer;
