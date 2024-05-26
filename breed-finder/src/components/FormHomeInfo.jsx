import { Link } from 'react-router-dom';


export default function FormHomeInfo ({ userResponse, setUserResponse }) {
    function handleDwellingChange(e){
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, homeInfo: { ...prevUserRespState.homeInfo, dwelling: e.target.value }
        }))   
    }

    function handleEnvironmentChange(e){
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, homeInfo: { ...prevUserRespState.homeInfo, environment: e.target.value }
        }))   
    }

    function handleSizeRestrictionChange(e){
        e.preventDefault();
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, homeInfo: { ...prevUserRespState.homeInfo, sizeRestriction: {...prevUserRespState.homeInfo.sizeRestriction, yesNo: e.target.value } }
        }))   
    }

    return (
        <div className='form-container column'>
            <h3 className='form-section-title'>Home</h3>

            <div className='page-indicator-container row'>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>1</h3></div>
                <div className='page-indicator background-active'><h3 className='right-in-the-middle form-section-number-active'>2</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>3</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>4</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>5</h3></div>
            </div>

            <form>
                <label>Which dwelling best describes your home type?</label>
                    <label>Apartment/Condo (Studio - 2 Bedrooms)
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="ACSM" 
                        checked={ userResponse.homeInfo.dwelling === "ACSM" }
                        onChange={ handleDwellingChange }
                    /></label>

                    <label>Apartment/Condo (2+ Bedrooms)
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="ACLG" 
                        checked={ userResponse.homeInfo.dwelling === "ACLG" }
                        onChange={ handleDwellingChange }
                    /></label>

                    <label>Townhouse
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="TNHS" 
                        checked={ userResponse.homeInfo.dwelling === "TNHS" }
                        onChange={ handleDwellingChange }
                    /></label>

                    <label>House
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="HS" 
                        checked={ userResponse.homeInfo.dwelling === "HS" }
                        onChange={ handleDwellingChange }
                    /></label>

                    <label>Mobile Home/RV
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="MHRV" 
                        checked={ userResponse.homeInfo.dwelling === "MHRV" }
                        onChange={ handleDwellingChange }
                    /></label>

                    <label>Tiny House
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="TYHS" 
                        checked={ userResponse.homeInfo.dwelling === "TYHS" }
                        onChange={ handleDwellingChange }
                    /></label>
                    
                <label>Which environment best describes where you live?</label>
                    <label>Rural/Remote
                    <input 
                        type="radio" 
                        name="environment" 
                        value="RR" 
                        checked={ userResponse.homeInfo.environment === "RR" }
                        onChange={ handleEnvironmentChange }
                    /></label>

                    <label>City/Urban
                    <input 
                        type="radio" 
                        name="environment" 
                        value="CU" 
                        checked={ userResponse.homeInfo.environment === "CU" }
                        onChange={ handleEnvironmentChange }
                    /></label>
                    
                    <label>Suburban
                    <input 
                        type="radio" 
                        name="environment" 
                        value="SB" 
                        checked={ userResponse.homeInfo.environment === "SB" }
                        onChange={ handleEnvironmentChange }
                    /></label>

                <label>Does your home have any size restrictions for dogs?</label>
                    <label>Yes
                    <input 
                        type="radio" 
                        name="sizeRestriction" 
                        value="Yes" 
                        checked={ userResponse.homeInfo.sizeRestriction.yesNo === "Yes" }
                        onChange={ handleSizeRestrictionChange }
                    /></label>

                        { userResponse.homeInfo.sizeRestriction.yesNo === "Yes" && (
                            <input
                                type="number"
                                name="maxWeight"
                                placeholder="Max Permitted Weight"
                                min="1"
                                max="200"
                                value={ userResponse.homeInfo.sizeRestriction.maxWeight }
                                onChange={(e) => setUserResponse(prevUserRespState => ({
                                    ...prevUserRespState, homeInfo: { ...prevUserRespState.homeInfo, sizeRestriction:{ ...prevUserRespState.homeInfo.sizeRestriction, maxWeight: e.target.value } }
                                }))}
                            />
                        )} 

                    <label>No
                    <input 
                        type="radio" 
                        name="sizeRestriction" 
                        value="No" 
                        checked={ userResponse.homeInfo.sizeRestriction.maxWeight === Infinity }
                        onChange={ handleSizeRestrictionChange }
                    /></label>
                    
                <Link to="/introform"><button className='previous-button'>Previous</button></Link>
                <Link  to="/householdform"><button className='next-button'>Next</button></Link>
            </form>
            {/* <h3>{JSON.stringify(userResponse)}</h3> */}
        </div>
    )
}