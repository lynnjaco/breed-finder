import { Link } from 'react-router-dom';

export default function Home () {

    return (
        <>
            <img src='/public/assets/perfectpup.png' alt='perfect pup logo' id='home-logo'/>
            <p>Are you read to find your perfect pup?</p>
            <p>Take a short quiz and find out which dog breeds are most compatible for you!</p>
            <Link to="/introform"><button>Find My Perfect Pup</button></Link>
        </>
    )
}