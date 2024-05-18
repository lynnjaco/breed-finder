import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import getAllDogsList from './api/dogfetch';


function App() {

  const [allDogBreeds, setAllDogBreeds] = useState([]);
  const [temperList, setTemperList] = useState([]);

  // useEffect(() => {
  //   getAllDogsList().then(res => setAllDogBreeds(res.map( obj => obj.name)))
  //   getAllDogsList().then( res => {
  //     const list = res.map(obj => obj.temperament).join(", ").split(", ");
  //     const uniqueTemperList = list.filter( (item, index) => list.indexOf(item) === index);
  //     setTemperList(uniqueTemperList);
  // })
  // }, [])

  return (
    <>
      
    </>
  )
}

export default App
