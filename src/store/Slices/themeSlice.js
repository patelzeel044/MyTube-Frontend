import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: true,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('theme', state.darkMode ? 'dark' : 'light'); 
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem('theme', action.payload ? 'dark' : 'light');
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;