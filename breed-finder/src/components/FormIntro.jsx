import { Link } from 'react-router-dom';

export default function FormIntro ({ userResponse, setUserResponse }) {
    function handleNameChange(e){
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, intro: { ...prevUserRespState.intro, name: e.target.value }
        }))   
    }
    function handleEmailChange(e){
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, intro: { ...prevUserRespState.intro, email: e.target.value }
        }))  
    }
    function handleAgeChange(e){
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, intro: { ...prevUserRespState.intro, age: e.target.value }
        })) 
    }
    function handleZipCodeChange(e){
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, intro: { ...prevUserRespState.intro, zipCode: e.target.value }
        })) 
    }

    return (
        <>
            <h3>Intro</h3>
            <form>
                <label>Name
                <input type="text" placeholder="First Name" value={ userResponse.intro.name } onChange={ handleNameChange }/>
                </label>

                <label>Email
                <input type="email" placeholder="youremail@email.com" value={ userResponse.intro.email } onChange={ handleEmailChange }/>
                </label>

                <label>Age
                <input type="number" value={ userResponse.intro.age } onChange={ handleAgeChange }/>
                </label>

                <label>Location
                <input type="text" placeholder="Zip Code" value={ userResponse.intro.zipCode } onChange={ handleZipCodeChange }/>
                </label>
                
                <Link to="/homeinfoform"><button>Next</button></Link>
            </form>
            <h3>{JSON.stringify(userResponse)}</h3>
        </>
    )
}