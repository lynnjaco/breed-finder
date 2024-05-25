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
        <>
            <h3>Tell Me About Your</h3>
            <h1>Home</h1>

            <form>
                <label>Which dwelling best describes your home type?</label>
                    <p>Apartment/Condo (Studio - 2 Bedrooms)</p>
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="ACSM" 
                        checked={ userResponse.homeInfo.dwelling === "ACSM" }
                        onChange={ handleDwellingChange }/>

                    <p>Apartment/Condo (2+ Bedrooms)</p>
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="ACLG" 
                        checked={ userResponse.homeInfo.dwelling === "ACLG" }
                        onChange={ handleDwellingChange }/>

                    <p>Townhouse</p>
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="TNHS" 
                        checked={ userResponse.homeInfo.dwelling === "TNHS" }
                        onChange={ handleDwellingChange }/>

                    <p>House</p>
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="HS" 
                        checked={ userResponse.homeInfo.dwelling === "HS" }
                        onChange={ handleDwellingChange }/>

                    <p>Mobile Home/RV</p>
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="MHRV" 
                        checked={ userResponse.homeInfo.dwelling === "MHRV" }
                        onChange={ handleDwellingChange }/>

                    <p>Tiny House</p>
                    <input 
                        type="radio" 
                        name="dwelling" 
                        value="TYHS" 
                        checked={ userResponse.homeInfo.dwelling === "TYHS" }
                        onChange={ handleDwellingChange }/>
                    
                <label>Which environment best describes where you live?</label>
                    <p>Rural/Remote</p>
                    <input 
                        type="radio" 
                        name="environment" 
                        value="RR" 
                        checked={ userResponse.homeInfo.environment === "RR" }
                        onChange={ handleEnvironmentChange }/>

                    <p>City/Urban</p>
                    <input 
                        type="radio" 
                        name="environment" 
                        value="CU" 
                        checked={ userResponse.homeInfo.environment === "CU" }
                        onChange={ handleEnvironmentChange }/>
                    
                    <p>Suburban</p>
                    <input 
                        type="radio" 
                        name="environment" 
                        value="SB" 
                        checked={ userResponse.homeInfo.environment === "SB" }
                        onChange={ handleEnvironmentChange }/>

                <label>Does your home have any size restrictions for dogs?</label>
                    <p>Yes</p>
                    <input 
                        type="radio" 
                        name="sizeRestriction" 
                        value="Yes" 
                        checked={ userResponse.homeInfo.sizeRestriction.yesNo === "Yes" }
                        onChange={ handleSizeRestrictionChange }/>

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

                    <p>No</p>
                    <input 
                        type="radio" 
                        name="sizeRestriction" 
                        value="No" 
                        checked={ userResponse.homeInfo.sizeRestriction.maxWeight === Infinity }
                        onChange={ handleSizeRestrictionChange }/>
                    
                <Link to="/introform"><button>Previous</button></Link>
                <Link  to="/householdform"><button>Next</button></Link>
            </form>
            <h3>{JSON.stringify(userResponse)}</h3>
        </>
    )
}