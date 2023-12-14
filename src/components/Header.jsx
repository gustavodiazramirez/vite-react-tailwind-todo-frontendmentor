import React from 'react'
import MoonIcon from "../components/icons/moon-icon";

export const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
    <div className="flex justify-between mb-8">
      <h1 className="uppercase text-white text-3xl tracking-[10px] font-bold">
        todo
      </h1>
      <button>
        <MoonIcon className="fill-wihte-400" />
      </button>
    </div>
  </header>
  )
}

export default Header;