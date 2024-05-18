import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import getAllDogsList from './api/dogfetch';


function App() {

  const [allDogBreeds, setAllDogBreeds] = useState([]);

  useEffect(() => {
    getAllDogsList().then(res => setAllDogBreeds(res.map( obj => obj.name)))
  }, [])

  console.log(allDogBreeds);

  return (
    <>
      
    </>
  )
}

export default App
