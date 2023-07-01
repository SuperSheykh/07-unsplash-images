import React, { useState } from 'react'
import { useAppContext } from './Context'
import { useQueryClient } from '@tanstack/react-query'

const SearchForm = () => {
   const [text, setText] = useState('')
   const { setSearch, search } = useAppContext()
   const queryClient = useQueryClient()
   function handleChange(e) {
      setText(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault()
      setSearch(text)
      setText('')
   }

   return (
      <section>
         <h1 className='title'>Unsplash Images</h1>
         <form onSubmit={handleSubmit} className='search-form'>
            <input
               type='text'
               className='search-input form-input'
               placeholder='cat'
               name='searchText'
               value={text}
               onChange={handleChange}
            />
            <button className='btn' type='submit'>
               Search
            </button>
         </form>
      </section>
   )
}

export default SearchForm
