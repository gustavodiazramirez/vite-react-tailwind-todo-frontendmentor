import React, { useEffect, useReducer, useRef, useState } from 'react'
import MoonIcon from '../components/icons/moon-icon'
import SunIcon from '../components/icons/sun-icon'

export const Header = () => {

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() =>{
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')    
      localStorage.setItem('theme', 'light')
  
    }
  },[darkMode])
  const handleClickToggleTheme = () => {}
  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl uppercase text-white tracking-[10px] font-bold">
          todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  )
}

export default Header
