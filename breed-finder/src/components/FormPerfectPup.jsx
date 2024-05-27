import { Link } from 'react-router-dom';

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

            <form>
                <label>Which quality do you want most in your dog?</label>
              
                    <p>Activity Level</p>
                    <label>Playful<input type="radio" name="mostDesiredTrait" value="Playful"/></label>
                    <label>Calm<input type="radio" name="mostDesiredTrait" value="Calm"/></label>
                    <label>Active<input type="radio" name="mostDesiredTrait" value="Active"/></label>
                    
                    <p>Personality</p>
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
                    
                    <p>Skill</p>
                    <label>Hardworking<input type="radio" name="mostDesiredTrait" value="Hardworking"/></label>
                    <label>Intelligent<input type="radio" name="mostDesiredTrait" value="Intelligent"/></label>
                    <label>Protective<input type="radio" name="mostDesiredTrait" value="Protective"/></label>
                    <label>Powerful<input type="radio" name="mostDesiredTrait" value="Powerful"/></label>
                    <label>Compassionate<input type="radio" name="mostDesiredTrait" value="Compassionate"/></label>
            
                <Link to="/experienceform"><button className='previous-button'>Previous</button></Link>
                <Link  to="/results"><button className='next-button'>Results</button></Link>
            </form>
            {/* <h3>{JSON.stringify(userResponse)}</h3> */}
        </div>
    )
}

// functionality note: if the answers from the two questions in this form are the same, throw an error