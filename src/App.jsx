import Gallery from './Gallery'
import SearchForm from './SearchForm'
import ThemeToggle from './ThemeToggle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

const App = () => {
   return (
      <QueryClientProvider client={queryClient}>
         <main>
            <ThemeToggle />
            <SearchForm />
            <Gallery />
            <ToastContainer />
         </main>
      </QueryClientProvider>
   )
}
export default App
