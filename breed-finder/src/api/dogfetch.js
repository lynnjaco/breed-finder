const BASE_URL = "https://api.thedogapi.com/v1/breeds?api_key="
const API_KEY = import.meta.env.REACT_APP_DOG_API_KEY;

export function listDogBreeds(){
    return fetch(BASE_URL + API_KEY).then(response => response.json())  
}

export function getBreedInfo(id){
    return fetch("https://api.thedogapi.com/v1/images/" + id).then(response => response.json())
}