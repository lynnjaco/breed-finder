import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Styling
import './App.css'

// Data
import { listDogBreeds, getBreedInfo } from './api/dogfetch';

// General Components
import Home from './components/Home';
import Results from './components/Results';

// Form Components
import FormIntro from './components/FormIntro';
import FormHomeInfo from './components/FormHomeInfo';
import FormFamily from './components/FormFamily';
import FormExperience from './components/FormExperience';
import FormPerfectPup from './components/FormPerfectPup';
import Header from './components/Header';
import Footer from './components/Footer';
import BreedPage from './components/BreedPage';


function App() {

  const [breedList, setBreedList] = useState([]);
  const [breedInfo, setBreedInfo] = useState("");
  const [breedObject, setBreedObject] = useState("");
  
  function getImageURL(id){
      fetch("https://api.thedogapi.com/v1/images/" + id)
      .then(response => response.json())
      .then(res => {
        setBreedObject(res);
      })
  }
  
  useEffect(() => {
    listDogBreeds()
    .then(res => {
      setBreedList(res);
    })
  },[])

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
        yesNo: "",
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
    }
  }

  const [userResponse, setUserResponse] = useState(initialResponse);

  return (
    <div id="main">
      <Router>
        <Header />
        <div id='content-container' className='column'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/introform" element={ <FormIntro userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/homeinfoform" element={ <FormHomeInfo userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/householdform" element={ <FormFamily userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/experienceform" element={ <FormExperience userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/perfectpupform" element={ <FormPerfectPup userResponse={ userResponse } setUserResponse={ setUserResponse } /> } />
          <Route path="/results" element={ <Results userResponse={ userResponse } breedList={ breedList } setBreedList={ setBreedList } breedInfo={ breedInfo } setBreedInfo={ setBreedInfo }  getImageURL={ getImageURL } breedObject={ breedObject }/> }/>
          <Route path='/breedinfo/:id' element={ <BreedPage breedInfo={ breedInfo }/>}/>
        </Routes>
        </div>
        <Footer />
      </Router>  
    </div>
  )
}

export default App
