import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./BreedPage.css"

export default function BreedPage({ viewBreed, breedInfo}) {

    const [highlightBreed, setHighlightBreed] = useState(null);

    const {id} = useParams()

    useEffect(() => {
        viewBreed(id);
        console.log(breedInfo);
    }, [])

    return (
        <div className="form-container column">
            <div>
                <h1>Dog Breed</h1>
                <p>Happy - Happy - Happy - Happy - Happy - Happy</p>
                <h3>Breed Group: Toy</h3>
                <p>Bred For: Companion</p>
                <p>Life Span: </p>
                <p>Weight: 10 - 10 lbs</p>
            </div>

        </div>
    )
}