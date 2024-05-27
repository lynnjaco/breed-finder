import { Link } from 'react-router-dom';
import "./FormHomeInfo.css"


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

            <h4>Thanks, {userResponse.intro.name || "Friend"}! Some dog breeds thrive in certain living situations better than others due to their size, temperament, and activity level. Tell me about where your Perfect Pup will live...  </h4>

            <form className='column center-x-axis'>
                <div className='home-question-container'>
                    <label className='home-question'>Which dwelling best describes your home type?</label>
                    <div className='dwelling-question'>
                        <div className='home-radio-option column'>
                            <img src="/public/assets/formhomeicons/townhouseicon.svg" alt='Townhouse Icon'/>
                            <label>
                            <input 
                                type="radio" 
                                name="dwelling" 
                                value="TNHS" 
                                checked={ userResponse.homeInfo.dwelling === "TNHS" }
                                onChange={ handleDwellingChange }
                            /><br/>Townhouse</label>
                        </div>

                        <div className='home-radio-option column'>
                        <img src="/public/assets/formhomeicons/house.svg" alt='House Icon'/>
                            <label>
                            <input 
                                type="radio" 
                                name="dwelling" 
                                value="HS" 
                                checked={ userResponse.homeInfo.dwelling === "HS" }
                                onChange={ handleDwellingChange }
                            /><br/>House</label>
                        </div>

                        <div className='home-radio-option column'>
                            <img src="/public/assets/formhomeicons/apartmenticon.svg" alt='Apartment Icon'/>
                            <label>
                            <input 
                                type="radio" 
                                name="dwelling" 
                                value="ACSM" 
                                checked={ userResponse.homeInfo.dwelling === "ACSM" }
                                onChange={ handleDwellingChange }
                            /><br/>Apartment/Condo<br/>(Studio - 2 Bedrooms)</label>
                        </div>

                        <div className='home-radio-option column'>
                        <img src="/public/assets/formhomeicons/apartmentplusicon.svg" alt='Large Apartment Icon'/>
                            <label> 
                            <input 
                                type="radio" 
                                name="dwelling" 
                                value="ACLG" 
                                checked={ userResponse.homeInfo.dwelling === "ACLG" }
                                onChange={ handleDwellingChange }
                            /><br/>Large Apartment/Condo<br/>(2+ Bedrooms)</label>
                        </div>

                        <div className='home-radio-option column'>
                        <img src="/public/assets/formhomeicons/rv.svg" alt='Mobile Home/RV Icon'/>

                            <label>
                            <input 
                                type="radio" 
                                name="dwelling" 
                                value="MHRV" 
                                checked={ userResponse.homeInfo.dwelling === "MHRV" }
                                onChange={ handleDwellingChange }
                            /><br/>Mobile Home/RV</label>
                        </div>

                        <div className='home-radio-option column'>
                            <img src="/public/assets/formhomeicons/tinyhouse.svg" alt='Tiny House Icon'/>
                            <label>
                            <input 
                                type="radio" 
                                name="dwelling" 
                                value="TYHS" 
                                checked={ userResponse.homeInfo.dwelling === "TYHS" }
                                onChange={ handleDwellingChange }
                            /><br/>Tiny House</label>
                        </div>

                    </div>
                </div>
                
                <div className='home-question-container'>
                    <label className='home-question'>Which environment best describes where you live?</label>
                    <div className='row'>
                        <div className='home-radio-option column'>
                        <img src="/public/assets/formhomeicons/remote.svg" alt='Rural/Remote Icon'/>
                            <label>
                            <input 
                                type="radio" 
                                name="environment" 
                                value="RR" 
                                checked={ userResponse.homeInfo.environment === "RR" }
                                onChange={ handleEnvironmentChange }
                            /><br/>Rural/Remote</label>
                        </div>

                        <div className='home-radio-option column'>
                        <img src="/public/assets/formhomeicons/city.svg" alt='City Icon'/>
                            <label>
                            <input 
                                type="radio" 
                                name="environment" 
                                value="CU" 
                                checked={ userResponse.homeInfo.environment === "CU" }
                                onChange={ handleEnvironmentChange }
                            /><br/>City/Urban</label>
                        </div>

                        <div className='home-radio-option column'>
                        <img src="/public/assets/formhomeicons/suburbs.svg" alt='Suburbs Icon'/>
                            <label>
                            <input 
                                type="radio" 
                                name="environment" 
                                value="SB" 
                                checked={ userResponse.homeInfo.environment === "SB" }
                                onChange={ handleEnvironmentChange }
                            /><br/>Suburban</label>
                        </div>
                    </div>
                </div>
                <div className='home-question-container'>
                    <label className='home-question'>Does your home have any size restrictions for dogs?</label>
                    <div id= "size-restrictions" className='row'>
                        <label>
                        <input 
                            type="radio" 
                            name="sizeRestriction" 
                            value="Yes" 
                            checked={ userResponse.homeInfo.sizeRestriction.yesNo === "Yes" }
                            onChange={ handleSizeRestrictionChange }
                        /><br/>Yes</label>

                            { userResponse.homeInfo.sizeRestriction.yesNo === "Yes" && (
                                <input
                                    type="number"
                                    name="maxWeight"
                                    className='input-box narrow-input'
                                    placeholder="Max Permitted Weight"
                                    min="1"
                                    max="200"
                                    value={ userResponse.homeInfo.sizeRestriction.maxWeight }
                                    onChange={(e) => setUserResponse(prevUserRespState => ({
                                        ...prevUserRespState, homeInfo: { ...prevUserRespState.homeInfo, sizeRestriction:{ ...prevUserRespState.homeInfo.sizeRestriction, maxWeight: e.target.value } }
                                    }))}
                                />
                            )} 

                        <label>
                        <input 
                            type="radio" 
                            name="sizeRestriction" 
                            value="No" 
                            checked={ userResponse.homeInfo.sizeRestriction.maxWeight === Infinity }
                            onChange={ handleSizeRestrictionChange }
                        /><br/>No</label>
                    </div>
                </div> 

                   
                <Link to="/introform"><button className='previous-button'>Previous</button></Link>
                <Link  to="/householdform"><button className='next-button'>Next</button></Link>
            </form>
            {/* <h3>{JSON.stringify(userResponse)}</h3> */}
        </div>
    )
}