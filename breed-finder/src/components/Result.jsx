import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
// import "./Results.css"

export default function Result({ userResponse, dog, imgId }) {
    // console.log({runnerUpCompatibleBreeds, mostCompatibleBreed})
    // console.log(url)
    // console.log(ImageBitmapRenderingContext``)
    // console.log(imgId)

    // const [url, setUrl] = useState("")

    // useEffect(() => {
    //     getImageURL(imgId)
    // }, [])

    // function getImageURL(id){
    //     fetch("https://api.thedogapi.com/v1/images/" + id)
    //     .then(response => response.json())
    //     .then(res => { 
    //         setUrl(res.url)
    // })}

    return (
        <>
            <>
                {/* <div id="most-compatible-breed-container" className="column" >
                    <h3 id="most-compatible-breed-name">{ mostCompatibleBreed.name || "Breed Name Not Loaded" }</h3>
                    <img id="most-compatible-image" src={ url } alt="Dog Image"/>
                    <div className="row" >
                        <p id="most-compatible-breed-group">Breed Group: { mostCompatibleBreed.breed_group || "Breed Group Not Loaded" }</p>
                        <p id="most-compatible-life-span">Life Span: { mostCompatibleBreed.life_span || "Life Span Not Loaded" }</p>
                    </div>
                    <p id="most-compatible-temp">{ mostCompatibleBreed.temperament.split(", ").join(" - ") || "Temperament Not Loaded"}</p>
                </div> */}
            </>
            <>   
                {/* <div className="breed-container" key={dog.id}>
                    <img className="runner-up-breed-images" src={ url } alt="Dog Image"/>
                    <div className="runner-up-specs">
                        <p key={ dog.id } className="runner-up-name">{ dog.name }</p>
                        <p className="runner-up-breed-group">Breed Group: { dog.breed_group }</p>
                        <p>Life Span: { dog.life_span }</p>
                        <p className="runner-up-temp">{ dog.temperament.split(", ").slice(0, 3).join(" - ") }</p>
                    </div>
                </div> */}
            </>
        </>
    )
}