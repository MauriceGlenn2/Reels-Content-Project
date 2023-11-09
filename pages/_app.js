import '@/styles/globals.css'
import NavBar from '@/components/NavBar' // Import your NavBar component

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar /> {/* Include the NavBar component */}
      <Component {...pageProps} />
    </>
  )
}