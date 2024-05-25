import { Link } from 'react-router-dom';

export default function FormExperience ({ userResponse, setUserResponse }) {

    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Experience</h1>
            <form>
                <label>How many dogs have you owned in the past?</label>
                <input type="number"/>

                <label>How would you describe your dog training abilty?</label>
                <p>"Trained" is defined as house trained, leash trained, and able to follow basic commands: "sit", "stay", "come", "down", "drop it".</p>
                    <p>Non-Existent <span>"I've never trained a dog."</span></p>
                        <input type="radio" name="trainerLevel" value="none"/>

                    <p>Beginner <span>"I've trained one or two dogs."</span></p>
                        <input type="radio" name="trainerLevel" value="beginner"/>

                    <p>Intermediate <span>"I've trained 3 - 4 dogs."</span></p>
                        <input type="radio" name="trainerLevel" value="intermediate"/>
                        
                    <p>Professional <span>"I've trained more than 5 dogs."</span></p>
                        <input type="radio" name="trainerLevel" value="professional"/>
                
                <Link to="/householdform"><button>Previous</button></Link>
                <Link  to="/perfectpupform"><button>Next</button></Link>
            </form>
            <h3>{JSON.stringify(userResponse)}</h3>
        </>
    )
}