import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Results.css"
import calculateBreedScores from "../utilities/sortBreedList"
import Result from "./Result";

export default function Results({ userResponse, breedList, setBreedList, getImageURL, breedObject}) { 
    const mostCompatibleBreed = breedList[0];
    const runnerUpCompatibleBreeds = breedList.slice(1, 5);

    useEffect(() => {
        let scoredBreedList = calculateBreedScores({ dogBreeds: breedList, userResponse });
        let sortedBreedList = scoredBreedList.sort((a, b) => b.score - a.score);
        setBreedList(sortedBreedList);
    }, []);
    
    useEffect(() => {
        if (breedList.length > 0) {
            getImageURL(breedList[0].reference_image_id);
        }
    }, [breedList]);

    return ( breedList.length && 
        <div id="results-container" className="form-container">
            <h4>Congratulation, { userResponse.intro.name || "Friend" }! The most compatible breed of your Perfect Pup is the...</h4>
            <div id="breed-results-container">
                <div id="most-compatible-breed-container" className="column border-rad" >
                    <h2 id="most-compatible-breed-name">{ mostCompatibleBreed.name || "Breed Name Not Loaded" }</h2>
                    <img id="most-compatible-image" className="border-rad" src={ breedObject.url } alt="Dog Image"/>
                    <p id="most-compatible-breed-group">Breed Group: { mostCompatibleBreed.breed_group || "Unspecified" }</p>
                    <p id="most-compatible-life-span">Life Span: { mostCompatibleBreed.life_span || "Unspecified" }</p>
                    <p id="most-compatible-temp">{ mostCompatibleBreed.temperament.split(", ").join(" - ") || "Unspecified Temperament"}</p>
                </div>

                <div id="runner-up-right-side" className="column">
                    <h5 id="others-notice">Other Breeds To Consider...</h5>
                    { runnerUpCompatibleBreeds.map(el => (
                        <div className="breed-container border-rad" key={el.id}>
                            {/* <img className="runner-up-breed-images" src={ breedObject.url } alt="Dog Image"/> */}
                            <div className="runner-up-specs">
                                <p key={ el.id } className="runner-up-name">{ el.name }</p>
                                <p className="runner-up-breed-group">Breed Group: { el.breed_group }</p>
                                <p>Life Span: { el.life_span }</p>
                                <p className="runner-up-temp">{ el.temperament.split(", ").slice(0, 3).join(" - ") }</p>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>

            <Link to="/perfectpupform"><button className='previous-button'>Previous</button></Link>
            <Link  to="/introform"><button className='next-button'>Start Over</button></Link>
            {/* <h4>{JSON.stringify(userResponse)}</h4> */}
        </div>
    )
}