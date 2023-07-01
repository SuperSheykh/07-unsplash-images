import React from 'react'
import { FaMoon } from 'react-icons/fa'
import { BiSun } from 'react-icons/bi'
import { useAppContext } from './Context'

const ThemeToggle = () => {
   const { isDarkTheme, toggleDarkTheme } = useAppContext()
   return (
      <section className='toggle-container'>
         <button className='toggle-icon dark-toggle' onClick={toggleDarkTheme}>
            {isDarkTheme ? <FaMoon /> : <BiSun />}
         </button>
      </section>
   )
}

export default ThemeToggle
