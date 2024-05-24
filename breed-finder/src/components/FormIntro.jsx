import { Link } from 'react-router-dom';

export default function FormIntro ({ userResponse, setUserResponse }) {
    function handleNameChange(e){
        e.preventDefault();
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, intro: { ...prevUserRespState.intro, name: e.target.value }
        }))   
    }
    function handleEmailChange(e){
        e.preventDefault();
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, intro: { ...prevUserRespState.intro, email: e.target.value }
        }))  
    }
    function handleAgeChange(e){
        e.preventDefault();
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, intro: { ...prevUserRespState.intro, age: e.target.value }
        })) 
    }
    function handleZipCodeChange(e){
        e.preventDefault();
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, intro: { ...prevUserRespState.intro, zipCode: e.target.value }
        })) 
    }

    return (
        <>
            <h3>Intro</h3>
            <form>
                <label>Name</label>
                <input type="text" placeholder="First Name" value={ userResponse.intro.name } onChange={ handleNameChange }/>
                <label>Email</label>
                <input type="email" placeholder="youremail@email.com" value={ userResponse.intro.email } onChange={ handleEmailChange }/>
                <label>Age</label>
                <input type="number" value={ userResponse.intro.age } onChange={ handleAgeChange }/>
                <label>Location</label>
                <input type="text" placeholder="Zip Code" value={ userResponse.intro.zipCode } onChange={ handleZipCodeChange }/>
                <Link to="/homeinfoform"><button>Next</button></Link>
            </form>
            <h3>{JSON.stringify(userResponse)}</h3>
        </>
    )
}