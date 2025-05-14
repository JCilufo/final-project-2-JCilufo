import Header from './components/header'
import SpeciesGrid from './components/species-grid/index'
import { useState, useEffect } from 'react'

export default function App() {
  const [species, setSpecies] = useState([])

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/species')
      .then((response) => response.json())
      .then((data) => setSpecies(data))
      .catch((error) => console.error('Error fetching species:', error))
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <Header />
      <SpeciesGrid species={species} />
    </main>
  )
}
