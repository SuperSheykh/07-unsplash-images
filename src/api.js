import axios from 'axios'

const accessKey = 'YQEKHjWpii3h-OxZ2NT9giC9oacRUbH0XBpg067CrDw'
const secretKey = '9_97yTZdiONFT8pBM3WJ9nC0T9gi7dtElwup-B90sRk'
const baseURL = 'https://api.unsplash.com/'

const fetchUnsplash = axios.create({
   baseURL: 'https://api.unsplash.com/',
   headers: {
      'Accept-version': 'v1',
      Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
   },
})

export default fetchUnsplash
