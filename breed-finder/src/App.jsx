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
import Header from './components/Header';
import Footer from './components/Footer';


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
        sizeRestriction: {
          yesNo: "",
          maxWeight: ""
        }  
    },
    household: {
      quantity: "",
      youngChildren: "",
      allergies: "",
      otherPets: {
        check: "",
        dog: "",
        cat: "",
        bird: "",
        rodent: "",
        livestock: "",
        other: ""  
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
    <div id="main">
      <Router>
        <Header />
        <div id='content-container'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          {/* <div id='form-container'> */}
            <Route path="/introform" element={ <FormIntro userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
            <Route path="/homeinfoform" element={ <FormHomeInfo userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
            <Route path="/householdform" element={ <FormFamily userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
            <Route path="/experienceform" element={ <FormExperience userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
            <Route path="/perfectpupform" element={ <FormPerfectPup userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          {/* </div> */}
          <Route path="/results" element={ <Results userResponse={ userResponse }/> }/>
        </Routes>
        </div>
        <Footer />
      </Router>  
    </div>
  )
}

export default App
