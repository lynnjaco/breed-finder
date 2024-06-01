import { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Results.css"
import calculateBreedScores from "../utilities/sortBreedList"

export default function Results({ userResponse, breedList, setBreedList}) {
    useEffect(() => {
        let scoredBreedList = calculateBreedScores({ dogBreeds: breedList, userResponse });
        let sortedBreedList = scoredBreedList.sort((a, b) => b.score - a.score);
        console.log(sortedBreedList)
        setBreedList(sortedBreedList);
    }, []);
    
    const mostCompatibleBreed = breedList[0];
    const runnerUpCompatibleBreeds = breedList.slice(1, 5);

    function getDogImageURL(id){
        fetch("https://api.thedogapi.com/v1/images/" + id)
        .then(response => response.json())
        .then(res => res.url)
    }

    return ( breedList.length && 
        <div className="form-container column">
            <h4>{ userResponse.intro.name || "Friend" }, thank you for sharing your input!<br/>Based on your responses, the most compatible breed of your Perfect Pup is the...</h4>

            <div id="most-compatible-breed" className="column">
                <h3>{ mostCompatibleBreed.name || "Breed Name Not Loaded" }</h3>
                <img src={ getDogImageURL(mostCompatibleBreed.reference_image_id) } alt="Dog Image"/>
                <p>{ mostCompatibleBreed.breed_group || "Breed Group Not Loaded" } Breed Group</p>
                <p>Life Span: { mostCompatibleBreed.life_span || "Life Span Not Loaded" }</p>
                <p>{ mostCompatibleBreed.temperament.split(", ").join(" - ") || "Temperament Not Loaded"}</p>
            </div>

            <h4>You Might Also Want To Consider...</h4>

            <div className="row" id="runner-up-container">
                { runnerUpCompatibleBreeds.map(el => (
                    <div>
                        <p key={ el.id }> { el.name } </p>
                        <img src={ getDogImageURL(runnerUpCompatibleBreeds.reference_image_id) } alt="Dog Image"/>
                        <p>{ el.breed_group }</p>
                        <p>Life Span: { el.life_span }</p>
                        <p>{ el.temperament.split(", ").slice(0, 3).join(" - ") }</p>
                    </div>
                ))}
            </div>

            <Link to="/perfectpupform"><button className='previous-button'>Previous</button></Link>
            <Link  to="/introform"><button className='next-button'>Start Over</button></Link>
            {/* <h4>{JSON.stringify(userResponse)}</h4> */}
        </div>
    )
}