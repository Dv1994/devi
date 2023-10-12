import '@/styles/globals.css'
import Navbar from './components/Navbar'
import '../pages/components/Navbar'
import Dashboard from './components/dashboard'
import Blog from './components/blog'

export default function App({ Component, pageProps }) {
  return 
  <>
  <Navbar />
  <Component {...pageProps} />
  <Blog />
  <Dashboard />
  </>
}
