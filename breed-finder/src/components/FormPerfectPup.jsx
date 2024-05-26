import { Link } from 'react-router-dom';

export default function FormPerfectPup ({ userResponse, setUserResponse }) {

    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Perfect Pup</h1>

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
            
                <label>Which quality do you want least in your dog?</label>

                    <p>Activity Level</p>
                    <label>Playful<input type="radio" name="leastDesiredTrait" value="Playful"/></label>
                    <label>Calm<input type="radio" name="leastDesiredTrait" value="Calm"/></label>
                    <label>Active<input type="radio" name="leastDesiredTrait" value="Active"/></label>
                    
                    <p>Personality</p>
                    <label>Friendly<input type="radio" name="leastDesiredTrait" value="Friendly"/></label>
                    <label>Curious<input type="radio" name="leastDesiredTrait" value="Curious"/></label>
                    <label>Loyal<input type="radio" name="leastDesiredTrait" value="Loyal"/></label>
                    <label>Brave<input type="radio" name="leastDesiredTrait" value="Brave"/></label>
                    <label>Cat-Like<input type="radio" name="leastDesiredTrait" value="Cat-Like"/></label>
                    <label>Cheerful<input type="radio" name="leastDesiredTrait" value="Cheerful"/></label>
                    <label>Independent<input type="radio" name="leastDesiredTrait" value="Independent"/></label>
                    <label>Affectionate<input type="radio" name="leastDesiredTrait" value="Affectionate"/></label>
                    <label>Feisty<input type="radio" name="leastDesiredTrait" value="Feisty"/></label>
                    <label>Sensitive<input type="radio" name="leastDesiredTrait" value="Sensitive"/></label>
                    
                    <p>Skill</p>
                    <label>Hardworking<input type="radio" name="leastDesiredTrait" value="Hardworking"/></label>
                    <label>Intelligent<input type="radio" name="leastDesiredTrait" value="Intelligent"/></label>
                    <label>Protective<input type="radio" name="leastDesiredTrait" value="Protective"/></label>
                    <label>Powerful<input type="radio" name="leastDesiredTrait" value="Powerful"/></label>
                    <label>Compassionate<input type="radio" name="leastDesiredTrait" value="Compassionate"/></label>

                <Link to="/experienceform"><button>Previous</button></Link>
                <Link  to="/results"><button>Next</button></Link>
            </form>
            <h3>{JSON.stringify(userResponse)}</h3>
        </>
    )
}

// functionality note: if the answers from the two questions in this form are the same, throw an error