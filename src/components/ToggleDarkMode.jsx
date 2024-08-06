import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode, setDarkMode } from '../store/Slices/themeSlice';
import { MdLightMode, MdDarkMode } from "./icons.js";


const ToggleDarkMode = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedPreference = localStorage.getItem('theme');
    if (storedPreference) {
      dispatch(setDarkMode(storedPreference === 'dark'));
    }
  }, [dispatch]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.querySelector('body').classList.add('bg-[#1A1A1A]');
      document.querySelector('body').classList.remove('bg-[#E8E8E8]');
    } else {
      document.documentElement.classList.remove('dark');
      document.querySelector('body').classList.remove('bg-[#1A1A1A]');
      document.querySelector('body').classList.add('bg-[#E8E8E8]');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="p-2 rounded text-black dark:text-white bg-[#F5F5F5] dark:bg-[#121212]"
    >
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  )
};

export default ToggleDarkMode;