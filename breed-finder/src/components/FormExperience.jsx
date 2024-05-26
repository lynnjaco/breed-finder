import { Link } from 'react-router-dom';

export default function FormExperience ({ userResponse, setUserResponse }) {

    function handleTrainingLevelChange(e){
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, experience: { ...prevUserRespState.homeInfo, trainingAbility: e.target.value }
        }))   
    }

    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Experience</h1>
            <form>
                <label>How many dogs have you owned in the past?</label>
                <input type="number"/>

                <label>How would you describe your dog training abilty?</label>
                <p>"Trained" is defined as house trained, leash trained, and able to follow basic commands: "sit", "stay", "come", "down", "drop it".</p>
                    <label>Non-Existent <span>"I've never trained a dog."</span>
                        <input type="radio" name="trainerLevel" value="none"/></label>

                    <label>Beginner <span>"I've trained one or two dogs."</span>
                        <input type="radio" name="trainerLevel" value="beginner"/></label>

                    <label>Intermediate <span>"I've trained 3 - 4 dogs."</span>
                        <input type="radio" name="trainerLevel" value="intermediate"/></label>
                        
                    <label>Professional <span>"I've trained more than 5 dogs."</span>
                        <input type="radio" name="trainerLevel" value="professional"/></label>
                
                <Link to="/householdform"><button>Previous</button></Link>
                <Link  to="/perfectpupform"><button>Next</button></Link>
            </form>
            <h3>{JSON.stringify(userResponse)}</h3>
        </>
    )
}