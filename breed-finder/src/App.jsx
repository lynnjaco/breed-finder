import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import getAllDogsList from './api/dogfetch';


function App() {

  const [allDogBreeds, setAllDogBreeds] = useState([]);
  const [temperList, setTemperList] = useState([]);
  const [userResponse, setUserResponse] = useState(initialResponse);

  const initialResponse = {
    intro: {
      name: "",
      email: "",
      age: "",
      zipCode: ""  
    },
    homeInfo: {
      dwelling: "",
        environment: "",
        sizeRestriction: ""  
    },
    household: {
      quantity: "",
        youngChildren: "",
        allergies: "",
        otherPets: {
          dog: "",
          cat: "",
          bird: "",
          rodent: "",
          livestock: ""  
        }
    },
    experience: {
      pastDogs: "",
      trainingAbility: ""
    },
    perfectPup: {
      mostDesiredTrait: "",
      leastDesiredTrait: ""
    }
  }

  return (
    <>
      
    </>
  )
}

export default App
