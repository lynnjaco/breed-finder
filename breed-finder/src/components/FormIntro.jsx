import { Link } from 'react-router-dom';
import "./FormIntro.css"

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
        <div className='form-container column'>
            <h3 className='form-section-title'>Intro</h3>

            <div className='page-indicator-container row'>
                <div className='page-indicator background-active'><h3 className='right-in-the-middle form-section-number-active'>1</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>2</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>3</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>4</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>5</h3></div>
            </div>

            <h4>Let's start with some info about yourself...</h4>

            <form className='column center-x-axis'>
                <input type="text" className='input-box' placeholder="Name" maxlength="30" required value={ userResponse.intro.name } onChange={ handleNameChange }/> 
                <input type="email" className='input-box' placeholder="Email Address" value={ userResponse.intro.email } onChange={ handleEmailChange }/>
                <input type="number" className='input-box narrow-input' min="1" max="130" placeholder="Age" value={ userResponse.intro.age } onChange={ handleAgeChange }/>
                <input type="text" className='input-box narrow-input' placeholder="Zip Code" maxlength="5" value={ userResponse.intro.zipCode } onChange={ handleZipCodeChange }/>
                <Link to="/homeinfoform"><button className='next-button'>Next</button></Link>
            </form>
            {/* <h3>{JSON.stringify(userResponse)}</h3> */}
        </div>
    )
}