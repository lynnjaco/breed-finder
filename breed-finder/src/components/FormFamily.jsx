import { Link } from 'react-router-dom';

export default function FormFamily({ userResponse, setUserResponse }) {

    function handleFamilyQuantityChange(e) {
        setUserResponse(prevUserRespState => ({
            ...prevUserRespState, household: { ...prevUserRespState.household, quantity: e.target.value }
        }));
    }

    function handleYoungChildrenChange(e) {
        setUserResponse(prevUserRespState => ({
            ...prevUserRespState, household: { ...prevUserRespState.household, youngChildren: e.target.value }
        }));
    }

    function handleAllergiesChange(e) {
        setUserResponse(prevUserRespState => ({
            ...prevUserRespState, household: { ...prevUserRespState.household, allergies: e.target.value }
        }));
    }

    return (
        <div className='form-container column'>
            <h3 className='form-section-title'>Family</h3>

            <div className='page-indicator-container row'>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>1</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>2</h3></div>
                <div className='page-indicator background-active'><h3 className='right-in-the-middle form-section-number-active'>3</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>4</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>5</h3></div>
            </div>

            <form>
                <label>How many people are in your household?</label>
                    <input
                        type="number"
                        name="householdMemberCount"
                        min="1"
                        onChange={ handleFamilyQuantityChange }/>

                    <label>Are there any children under 12 years old in your home?</label>
                    <label>Yes
                    <input
                        type="radio"
                        name="youngChildren"
                        value="Yes"
                        onChange={ handleYoungChildrenChange }
                        checked={ userResponse.household.youngChildren === "Yes" }
                    /></label>

                    <label>No
                    <input
                        type="radio"
                        name="youngChildren"
                        value="No"
                        onChange={ handleYoungChildrenChange }
                        checked={ userResponse.household.youngChildren === "No" }
                    /></label>

                    <label>Are any members of your household allergic to dogs?</label>
                    <label>Yes
                    <input
                        type="radio"
                        name="allergies"
                        value="Yes"
                        onChange={ handleAllergiesChange }
                        checked={ userResponse.household.allergies === "Yes" }
                    /></label>

                    <label>No
                    <input
                        type="radio"
                        name="allergies"
                        value="No"
                        onChange={ handleAllergiesChange }
                        checked={ userResponse.household.allergies === "No" }
                    /></label>

                <label>Do you have any pets/animals?</label>
                    <label>Yes
                    <input
                        type="radio"
                        name="otherPets"
                        value="Yes"
                    /></label>

                    {userResponse.household.otherPets.check === "Yes" && (
                        <>
                            <label>Dog(s)
                            <input
                                type="checkbox"
                                name="otherAnimals"
                            /></label>

                            <label>Cat(s)
                            <input
                                type="checkbox"
                                name="otherAnimals"
                            /></label>

                            <label>Bird(s)
                            <input
                                type="checkbox"
                                name="otherAnimals"
                            /></label>

                            <label>Rodent(s)
                            <input
                                type="checkbox"
                                name="otherAnimals"
                            /></label>

                            <label>Livestock(s)
                            <input
                                type="checkbox"
                                name="otherAnimals"
                            /></label>

                            <label>Other
                            <input
                                type="checkbox"
                                name="otherAnimals"
                            /></label>
                        </>
                    )}
                    <label>No
                    <input
                        type="radio"
                        name="otherPets"
                        value="No"
                    /></label>

                <Link to="/homeinfoform"><button className='previous-button'>Previous</button></Link>
                <Link to="/experienceform"><button className='next-button'>Next</button></Link>
            </form>
            {/* <h3>{JSON.stringify(userResponse)}</h3> */}
        </div>
    );
}
