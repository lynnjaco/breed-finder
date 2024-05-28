import { Link } from 'react-router-dom';
import "./FormPerfectPup.css"

export default function FormPerfectPup ({ userResponse, setUserResponse }) {

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
                        <img src='/public/assets/activityicon.png' alt='Activity Icon'/> 
                        <label>Playful<input type="radio" name="mostDesiredTrait" value="Playful"/></label>
                        <label>Calm<input type="radio" name="mostDesiredTrait" value="Calm"/></label>
                        <label>Active<input type="radio" name="mostDesiredTrait" value="Active"/></label>
                    </div>
                    
                    <div className='column trait-group'>
                        {/* <p>Personality</p> */}
                        <img src='public/assets/personalityicon.png' alt='Personality Icon'/>
                        <label>Friendly<input type="radio" name="mostDesiredTrait" value="Friendly"/></label>
                        <label>Curious<input type="radio" name="mostDesiredTrait" value="Curious"/></label>
                        <label>Loyal<input type="radio" name="mostDesiredTrait" value="Loyal"/></label>
                        <label>Brave<input type="radio" name="mostDesiredTrait" value="Brave"/></label>
                        <label>Cat-Like<input type="radio" name="mostDesiredTrait" value="Cat-Like"/></label>
                        <label>Cheerful<input type="radio" name="mostDesiredTrait" value="Cheerful"/></label>
                        <label>Independent<input type="radio" name="mostDesiredTrait" value="Independent"/></label>
                        <label>Affectionate<input type="radio" name="mostDesiredTrait" value="Affectionate"/></label>
                        <label>Feisty<input type="radio" name="mostDesiredTrait" value="Feisty"/></label>
                        <label>Sensitive<input type="radio" name="mostDesiredTrait" value="Sensitive"/></label>
                    </div>
                    
                    <div className='column trait-group'>
                        <img src='/public/assets/skillicon.png' alt='Skill Icon'/>
                        {/* <p>Skill</p> */}
                        <label>Hardworking<input type="radio" name="mostDesiredTrait" value="Hardworking"/></label>
                        <label>Intelligent<input type="radio" name="mostDesiredTrait" value="Intelligent"/></label>
                        <label>Protective<input type="radio" name="mostDesiredTrait" value="Protective"/></label>
                        <label>Powerful<input type="radio" name="mostDesiredTrait" value="Powerful"/></label>
                        <label>Compassionate<input type="radio" name="mostDesiredTrait" value="Compassionate"/></label>
                    </div>
                </div>
            
                <Link to="/experienceform"><button className='previous-button'>Previous</button></Link>
                <Link  to="/results"><button className='next-button'>Results</button></Link>
            </form>
            {/* <h3>{JSON.stringify(userResponse)}</h3> */}
        </div>
    )
}

// functionality note: if the answers from the two questions in this form are the same, throw an error