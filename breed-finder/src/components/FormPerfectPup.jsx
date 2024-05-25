import { Link } from 'react-router-dom';

export default function FormPerfectPup ({ userResponse, setUserResponse }) {

    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Perfect Pup</h1>

            <form>
                <label>Which quality do you want most in your dog?</label>
              
                <p>Activity Level</p>
                <input type="radio" name="activityYes" value="Playful"/>
                <input type="radio" name="activityYes" value="Calm"/>
                <input type="radio" name="activityYes" value="Active"/>
                
                <p>Personality</p>
                <input type="radio" name="personalityYes" value="Friendly"/>
                <input type="radio" name="personalityYes" value="Curious"/>
                <input type="radio" name="personalityYes" value="Loyal"/>
                <input type="radio" name="personalityYes" value="Brave"/>
                <input type="radio" name="personalityYes" value="Cat-Like"/>
                <input type="radio" name="personalityYes" value="Cheerful"/>
                <input type="radio" name="personalityYes" value="Independent"/>
                <input type="radio" name="personalityYes" value="Affectionate"/>
                <input type="radio" name="personalityYes" value="Feisty"/>
                <input type="radio" name="personalityYes" value="Sensitive"/>
                
                <p>Skill</p>
                <input type="radio" name="skillYes" value="Hardworking"/>
                <input type="radio" name="skillYes" value="Intelligent"/>
                <input type="radio" name="skillYes" value="Protective"/>
                <input type="radio" name="skillYes" value="Powerful"/>
                <input type="radio" name="skillYes" value="Compassionate"/>
            
                <label>Which quality do you want least in your dog?</label>

                <p>Activity Level</p>
                <input type="radio" name="activityNo" value="Playful"/>
                <input type="radio" name="activityNo" value="Calm"/>
                <input type="radio" name="activityNo" value="Active"/>
                
                <p>Personality</p>
                <input type="radio" name="personalityNo" value="Friendly"/>
                <input type="radio" name="personalityNo" value="Curious"/>
                <input type="radio" name="personalityNo" value="Loyal"/>
                <input type="radio" name="personalityNo" value="Brave"/>
                <input type="radio" name="personalityNo" value="Cat-Like"/>
                <input type="radio" name="personalityNo" value="Cheerful"/>
                <input type="radio" name="personalityNo" value="Independent"/>
                <input type="radio" name="personalityNo" value="Affectionate"/>
                <input type="radio" name="personalityNo" value="Feisty"/>
                <input type="radio" name="personalityNo" value="Sensitive"/>
                
                <p>Skill</p>
                <input type="radio" name="skillNo" value="Hardworking"/>
                <input type="radio" name="skillNo" value="Intelligent"/>
                <input type="radio" name="skillNo" value="Protective"/>
                <input type="radio" name="skillNo" value="Powerful"/>
                <input type="radio" name="skillNo" value="Compassionate"/>

                <Link to="/experienceform"><button>Previous</button></Link>
                <Link  to="/results"><button>Next</button></Link>
            </form>
            <h3>{JSON.stringify(userResponse)}</h3>
        </>
    )
}

// functionality note: if the answers from the two questions in this form are the same, throw an error