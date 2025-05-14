import Header from './components/header'
import SpeciesGrid from './components/species-grid/index'
import { useState, useEffect } from 'react'

const options = {
  method: 'GET',

  // `headers` notify the API that we want JSON data
  headers: {
    accept: 'application/json',
  },
}

export default function App() {
  const [species, setSpecies] = useState([])

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/species')
      .then((response) => response.json())
      .then((data) => setSpecies(data))
      .catch((error) => console.error('Error fetching species:', error))
  }, [])

  return (
    <main>
      <h1 className="text-3xl text-red-500">Hello, World!</h1>
      <p>This is a simple React application.</p>
    </main>
  )
}
