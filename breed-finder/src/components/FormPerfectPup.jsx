export default function FormPerfectPup () {
    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Perfect Pup</h1>

            <form>
                <label>Which quality do you want most in your dog?</label>
              
                <p>Activity Level</p>
                <input type="radio" name="playful" value="Playful"/>
                <input type="radio" name="calm" value="Calm"/>
                <input type="radio" name="active" value="Active"/>
                
                <p>Personality</p>
                <input type="radio" name="friendly" value="Friendly"/>
                <input type="radio" name="curious" value="Curious"/>
                <input type="radio" name="loyal" value="Loyal"/>
                <input type="radio" name="brave" value="Brave"/>
                <input type="radio" name="catLike" value="Cat-Like"/>
                <input type="radio" name="cheerful" value="Cheerful"/>
                <input type="radio" name="independent" value="Independent"/>
                <input type="radio" name="affectionate" value="Affectionate"/>
                <input type="radio" name="feisty" value="Feisty"/>
                <input type="radio" name="sensitive" value="Sensitive"/>
                
                <p>Skill</p>
                <input type="radio" name="hardworking" value="Hardworking"/>
                <input type="radio" name="intelligent" value="Intelligent"/>
                <input type="radio" name="protective" value="Protective"/>
                <input type="radio" name="powerful" value="Powerful"/>
                <input type="radio" name="compassionate" value="Compassionate"/>
            
                <label>Which quality do you want least in your do?</label>

                <p>Activity Level</p>
                <input type="radio" name="playful" value="Playful"/>
                <input type="radio" name="calm" value="Calm"/>
                <input type="radio" name="active" value="Active"/>
                
                <p>Personality</p>
                <input type="radio" name="friendly" value="Friendly"/>
                <input type="radio" name="curious" value="Curious"/>
                <input type="radio" name="loyal" value="Loyal"/>
                <input type="radio" name="brave" value="Brave"/>
                <input type="radio" name="catLike" value="Cat-Like"/>
                <input type="radio" name="cheerful" value="Cheerful"/>
                <input type="radio" name="independent" value="Independent"/>
                <input type="radio" name="affectionate" value="Affectionate"/>
                <input type="radio" name="feisty" value="Feisty"/>
                <input type="radio" name="sensitive" value="Sensitive"/>
                
                <p>Skill</p>
                <input type="radio" name="hardworking" value="Hardworking"/>
                <input type="radio" name="intelligent" value="Intelligent"/>
                <input type="radio" name="protective" value="Protective"/>
                <input type="radio" name="powerful" value="Powerful"/>
                <input type="radio" name="compassionate" value="Compassionate"/>

            </form>
        </>
    )
}

// functionality note: if the answers from the two questions in this form are the same, throw an error