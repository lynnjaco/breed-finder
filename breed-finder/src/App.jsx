import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import getAllDogsList from './api/dogfetch';
import FormIntro from './components/FormIntro';
import Home from './components/Home';
import Results from './components/Results.';


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
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/intro-form" element={ <FormIntro userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/home-info-form" element={ <FormHomeInfo userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/household-form" element={ <FormFamily userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/experience-form" element={ <FormExperience userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/perfect-pup-form" element={ <FormPerfectPup userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/results" element={ <Results userResponse={ userResponse }/> }/>
        </Routes>
      </Router>  
    </>
  )
}

export default App
