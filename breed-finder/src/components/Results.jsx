import "./Results.css"

export default function Results({ userResponse, breedList }) {

    let mostCompatibleBreed = breedList[0];

    let runnerUpCompatibleBreeds = array => {
        let twoThroughFive = [];
        for(let i = 1; i < 5; i++ ) {
            twoThroughFive.push(array[i])
        }
        return twoThroughFive;
    }
    return ( breedList.length && 
        <div className="form-container column">
            {/* <h4>{ JSON.stringify(userResponse) }</h4> */}
            <h4>{ userResponse.intro.name || "Friend" }, thank you for sharing your input!<br/>Based on your responses, the most compatible breed of your Perfect Pup is the...</h4>

            <h4>{ mostCompatibleBreed.name }</h4>

            <div id="most-compatible-breed" className="column">
                <h3>{ mostCompatibleBreed.name }</h3>
                <p>{ mostCompatibleBreed.breed_group }</p>
                <p>{ mostCompatibleBreed.temperament }</p>
                <p>{ mostCompatibleBreed.bred_for }</p>
            </div>

            <div className="row" id="runner-up-container">
                { breedList.map(el => (<p> { el.name } </p>)) }
            </div>
        </div>
    )
}