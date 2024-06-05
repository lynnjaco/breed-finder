import { Link } from 'react-router-dom';
import "./FormPerfectPup.css"

export default function FormPerfectPup ({ userResponse, setUserResponse }) {

    function handleMostDesiredTraitChange(e) {
        setUserResponse( prevUserRespState => (
            { ...prevUserRespState,
                perfectPup: { ...prevUserRespState.perfectPup, 
                    mostDesiredTrait: e.target.value }
            } 
        ))
    }

    return (
        <div className='form-container column'>
            <h3 className='form-section-title'>Perfect Pup</h3>

            <div className='page-indicator-container row'>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>1</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>2</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>3</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>4</h3></div>
                <div className='page-indicator background-active'><h3 className='right-in-the-middle form-section-number-active'>5</h3></div>
            </div>

            <h4>Historically, dogs have been selectively bred for to have certain characterstics.<br/>These traits are continously passed on through the generations.</h4>

            <form className='column center-x-axis'>
                <label className='question'>Which quality do you want most in your Perfect Pup?</label>
                <div className='row' id='trait-container'>
                    <div className='column trait-group'>
                        {/* <p>Activity Level</p> */}
                        <img src='//assets/activityicon.png' alt='Activity Icon'/> 
                        <label>Playful<input type="radio" name="mostDesiredTrait" value="Playful" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Calm<input type="radio" name="mostDesiredTrait" value="Calm" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Active<input type="radio" name="mostDesiredTrait" value="Active" onChange={ handleMostDesiredTraitChange }/></label>
                    </div>
                    
                    <div className='column trait-group'>
                        {/* <p>Personality</p> */}
                        <img src='/assets/personalityicon.png' alt='Personality Icon'/>
                        <label>Friendly<input type="radio" name="mostDesiredTrait" value="Friendly" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Curious<input type="radio" name="mostDesiredTrait" value="Curious" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Loyal<input type="radio" name="mostDesiredTrait" value="Loyal" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Brave<input type="radio" name="mostDesiredTrait" value="Brave" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Cat-Like<input type="radio" name="mostDesiredTrait" value="Cat-Like" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Cheerful<input type="radio" name="mostDesiredTrait" value="Cheerful" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Independent<input type="radio" name="mostDesiredTrait" value="Independent" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Affectionate<input type="radio" name="mostDesiredTrait" value="Affectionate" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Feisty<input type="radio" name="mostDesiredTrait" value="Feisty" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Sensitive<input type="radio" name="mostDesiredTrait" value="Sensitive" onChange={ handleMostDesiredTraitChange }/></label>
                    </div>
                    
                    <div className='column trait-group'>
                        <img src='//assets/skillicon.png' alt='Skill Icon'/>
                        {/* <p>Skill</p> */}
                        <label>Hardworking<input type="radio" name="mostDesiredTrait" value="Hardworking" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Intelligent<input type="radio" name="mostDesiredTrait" value="Intelligent" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Protective<input type="radio" name="mostDesiredTrait" value="Protective" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Powerful<input type="radio" name="mostDesiredTrait" value="Powerful" onChange={ handleMostDesiredTraitChange }/></label>
                        <label>Compassionate<input type="radio" name="mostDesiredTrait" value="Compassionate" onChange={ handleMostDesiredTraitChange }/></label>
                    </div>
                </div>
            
                <Link to="/experienceform"><button className='previous-button'>Previous</button></Link>
                <Link  to="/results"><button className='next-button'>Results</button></Link>
            </form>
            {/* <h5>{JSON.stringify(userResponse)}</h5> */}
        </div>
    )
}

// functionality note: if the answers from the two questions in this form are the same, throw an error