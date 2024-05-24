import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Styling
import './App.css'

// Data
import getAllDogsList from './api/dogfetch';

// General Components
import Home from './components/Home';
import Results from './components/Results.';

// Form Components
import FormIntro from './components/FormIntro';
import FormHomeInfo from './components/FormHomeInfo';
import FormFamily from './components/FormFamily';
import FormExperience from './components/FormExperience';
import FormPerfectPup from './components/FormPerfectPup';


function App() {

  const [allDogBreeds, setAllDogBreeds] = useState([]);

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

  const [userResponse, setUserResponse] = useState(initialResponse);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/introform" element={ <FormIntro userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/homeinfoform" element={ <FormHomeInfo userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/householdform" element={ <FormFamily userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/experienceform" element={ <FormExperience userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/perfectpupform" element={ <FormPerfectPup userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/results" element={ <Results userResponse={ userResponse }/> }/>
        </Routes>
      </Router>  
    </>
  )
}

export default App
