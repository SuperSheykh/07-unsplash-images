import { createContext, useContext, useState, useEffect } from 'react'

const appContext = createContext()

const AppContextProvider = ({ children }) => {
   const [isDarkTheme, setIsDarkTheme] = useState(() => {
      const userPastPref = localStorage.getItem('isDarkTheme') === 'true'
      const userPrefersDarkTheme = window.matchMedia(
         '(prefers-color-scheme: dark)'
      ).matches

      return localStorage.getItem('isDarkTheme') !== undefined
         ? userPastPref
         : userPrefersDarkTheme
   })
   const [search, setSearch] = useState('luxury car')
   const toggleDarkTheme = () => {
      document.body.classList.toggle('dark-theme')
      setIsDarkTheme(!isDarkTheme)
   }
   useEffect(() => {
      if (isDarkTheme) {
         document.body.classList.add('dark-theme')
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme))
   }, [isDarkTheme])
   return (
      <appContext.Provider
         value={{ isDarkTheme, toggleDarkTheme, search, setSearch }}
      >
         {children}
      </appContext.Provider>
   )
}
export default AppContextProvider

export const useAppContext = () => useContext(appContext)
