import { Link } from 'react-router-dom';

export default function FormFamily ({ userResponse, setUserResponse }) {

    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Family</h1>
            <form>
                <label>How many people are in your household?</label>
                <input type="number" name="householdMemberCount" min="1"/>

                <label>Are there any children under 12 years old in your home?</label>
                <p>Yes</p>
                <input 
                    type="radio" 
                    name="youngChildren" 
                    value="Yes"></input>
                <p>No</p>
                <input 
                    type="radio" 
                    name="youngChildren" 
                    value="No"></input>

                <label>Are any members of your household allergic to dogs?</label>
                <p>Yes</p>
                <input 
                    type="radio" 
                    name="allergies" 
                    value="Yes"></input>
                <p>No</p>
                <input 
                    type="radio" 
                    name="allergies" 
                    value="No"></input>

                <label>Do you have any pets/animals?</label>
                <input type="radio" name="otherAnimals" value="Yes"></input>
                    <p>Dog(s)</p><input type="checkbox" name="animalType" value="Dog(s)"/>
                    <p>Cat(s)</p><input type="checkbox" name="animalType" value="Cat(s)"/>
                    <p>Bird(s)</p><input type="checkbox" name="animalType" value="Bird(s)"/>
                    <p>Rodent(s)</p><input type="checkbox" name="animalType" value="Rodent(s)"/>
                    <p>Livestock(s)</p><input type="checkbox" name="animalType" value="Livestock"/>
                    <p>Other</p><input type="checkbox" name="animalType" value="Livestock"/>
                <input type="radio" name="otherAnimals" value="No"></input>

                <Link to="/homeinfoform"><button>Previous</button></Link>
                <Link  to="/experienceform"><button>Next</button></Link>
            </form>
            <h3>{JSON.stringify(userResponse)}</h3>
        </>
    )
}