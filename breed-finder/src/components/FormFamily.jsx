import { Link } from 'react-router-dom';

export default function FormFamily({ userResponse, setUserResponse }) {

    function handleFamilyQuantityChange(e) {
        setUserResponse(prevUserRespState => ({
            ...prevUserRespState, 
                household: { ...prevUserRespState.household, 
                    quantity: e.target.value }
        }));
    }

    function handleYoungChildrenChange(e) {
        setUserResponse(prevUserRespState => ({
            ...prevUserRespState, 
                household: { ...prevUserRespState.household,
                    youngChildren: e.target.value }
        }));
    }

    function handleAllergiesChange(e) {
        setUserResponse(prevUserRespState => ({
            ...prevUserRespState, 
                household: { ...prevUserRespState.household, 
                    allergies: e.target.value }
        }));
    }

    function handleOtherPetsChange(e) {
        setUserResponse(prevUserRespState => ({
            ...prevUserRespState, 
                household: { ...prevUserRespState.household,
                    otherPets: { ...prevUserRespState.household.otherPets,
                        yesNo: e.target.value,
                        dog: e.target.value === "No" ? false : "",
                        cat: e.target.value === "No" ? false : "",
                        bird: e.target.value === "No" ? false : "",
                        rodent: e.target.value === "No" ? false : "",
                        livestock: e.target.value === "No" ? false : "",
                        other: e.target.value === "No" ? false : "" }
                }
        }))
    }

    function handleAnimalSelect(e) {
        setUserResponse(prevUserRespState => ({
            ...prevUserRespState, 
                household: { ...prevUserRespState.household,
                    otherPets: { ...prevUserRespState.household.otherPets,
                        [e.target.value]: prevUserRespState["household"]["otherPets"][e.target.value] ? false : true }
                 }
        }))
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

            <h5>Dogs come with lots of love, and lots of responsibilities!<br/>To ensure your Perfect Pup fits seamlessly into your existing family, we need to understand what your household looks like.</h5>

            <form className='column'>
                <div className='column'> 
                    <label className='question'>How many people are in your household?</label>
                        <input
                            type="number"
                            name="householdMemberCount"
                            className='input-box narrow-input'
                            min="1"
                            onChange={ handleFamilyQuantityChange }/>
                </div>

                <div className='question-container'>
                    <label className='question'>Are there any children under 12 years old in your home?</label>
                    <div className='row yes-no-inputs'>
                        <label>
                        <input
                            type="radio"
                            name="youngChildren"
                            value="Yes"
                            onChange={ handleYoungChildrenChange }
                            checked={ userResponse.household.youngChildren === "Yes" }
                        /><br/>Yes</label>

                        <label>
                        <input
                            type="radio"
                            name="youngChildren"
                            value="No"
                            onChange={ handleYoungChildrenChange }
                            checked={ userResponse.household.youngChildren === "No" }
                        /><br/>No</label>
                    </div>
                </div>

                <div className='question-container'>
                    <label className='question'>Are any members of your household allergic to dogs?</label>
                    <div className='row yes-no-inputs'>
                        <label>
                        <input
                            type="radio"
                            name="allergies"
                            value="Yes"
                            onChange={ handleAllergiesChange }
                            checked={ userResponse.household.allergies === "Yes" }
                        /><br/>Yes</label>

                        <label>
                        <input
                            type="radio"
                            name="allergies"
                            value="No"
                            onChange={ handleAllergiesChange }
                            checked={ userResponse.household.allergies === "No" }
                        /><br/>No</label>
                    </div>
                </div>

                <div className='question-container'>
                    <label className='question'>Do you have any pets/animals?</label>
                    <div className='row yes-no-inputs'>
                        <label>
                        <input
                            type="radio"
                            name="otherPets"
                            value="Yes"
                            onChange={ handleOtherPetsChange }
                            checked={ userResponse.household.otherPets.yesNo === "Yes" }
                        /><br/>Yes</label>

                        <label>
                        <input
                            type="radio"
                            name="otherPets"
                            value="No"
                            onChange={ handleOtherPetsChange }
                            checked={userResponse.household.otherPets.yesNo === "No"}
                        /><br/>No</label>
                </div>

                        { userResponse.household.otherPets.yesNo === "Yes" && (
                            <>
                                <label>Dog
                                <input
                                    type="checkbox"
                                    name="otherAnimals"
                                    value="dog"
                                    onChange={ handleAnimalSelect }
                                /></label>

                                <label>Cat
                                <input
                                    type="checkbox"
                                    name="otherAnimals"
                                    value="cat"
                                    onChange={ handleAnimalSelect }
                                /></label>
                                
                                <label>Bird
                                <input
                                    type="checkbox"
                                    name="otherAnimals"
                                    value="bird"
                                    onChange={ handleAnimalSelect }
                                /></label>

                                <label>Rodent
                                <input
                                    type="checkbox"
                                    name="otherAnimals"
                                    value="rodent"
                                    onChange={ handleAnimalSelect }
                                /></label>

                                <label>Livestock
                                <input
                                    type="checkbox"
                                    name="otherAnimals"
                                    value="livestock"
                                    onChange={ handleAnimalSelect }
                                /></label>

                                <label>Other
                                <input
                                    type="checkbox"
                                    name="otherAnimals"
                                    value="other"
                                    onChange={ handleAnimalSelect }
                                /></label>
                            </>
                        )}
                        </div>
                

                <Link to="/homeinfoform"><button className='previous-button'>Previous</button></Link>
                <Link to="/experienceform"><button className='next-button'>Next</button></Link>
            </form>
            <h3>{JSON.stringify(userResponse)}</h3>
        </div>
    );
}
