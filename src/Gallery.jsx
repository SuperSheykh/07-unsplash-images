import { useQuery } from '@tanstack/react-query'
import React from 'react'
import fetchUnsplash from './api'
import { useAppContext } from './Context'

const Gallery = () => {
   const { search } = useAppContext()
   const { data, isLoading, isError } = useQuery({
      queryKey: ['pictures', search],
      queryFn: () => fetchUnsplash.get(`/search/photos?page=1&query=${search}`),
   })

   if (isLoading) {
      return (
         <section className='image-container'>
            <h2>Loading...</h2>
         </section>
      )
   }
   if (isError) {
      return (
         <section className='image-container'>
            <h2>There was an error!</h2>
         </section>
      )
   }
   const { results } = data.data
   if (results.length < 1) {
      return (
         <section className='image-container'>
            <h2>No results found!</h2>
         </section>
      )
   }
   return (
      <section className='image-container'>
         {results.map((pic) => {
            const { alt_description, urls, id } = pic
            return (
               <img
                  key={id}
                  src={urls?.small}
                  alt={alt_description}
                  className='img'
               />
            )
         })}
      </section>
   )
}

export default Gallery
