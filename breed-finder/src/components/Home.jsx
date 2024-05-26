import { Link } from 'react-router-dom';

export default function Home () {

    return (
        <div id='home-container' className='center-x-axis column border-rad'>
            <h2>Are you ready to find your<span>Perfect Pup</span>?</h2>
            <p>Complete our survey and find out which dog breeds are most compatible for you!</p>
            <Link to="/introform"><button>Find My Perfect Pup</button></Link>
        </div>
    )
}