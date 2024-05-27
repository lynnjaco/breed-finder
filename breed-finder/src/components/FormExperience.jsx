import { Link } from 'react-router-dom';
import "./FormExperience.css"

export default function FormExperience ({ userResponse, setUserResponse }) {

    function handleTrainingLevelChange(e){
        setUserResponse( prevUserRespState => (
            {...prevUserRespState, experience: { ...prevUserRespState.homeInfo, trainingAbility: e.target.value }
        }))   
    }

    return (
        <div className='form-container column'>
            <h3 className='form-section-title'>Experience</h3>

            <h4>For the safety, and sanity, of you and your Perfect Pup, training is a top priority.  Some breeds are easier to train, and others require an expereinced handler/owner to bring out their best.</h4>

            <div className='page-indicator-container row'>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>1</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>2</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>3</h3></div>
                <div className='page-indicator background-active'><h3 className='right-in-the-middle form-section-number-active'>4</h3></div>
                <div className='page-indicator background-normal'><h3 className='right-in-the-middle form-section-number-grey'>5</h3></div>
            </div>

            <form className='column center-x-axis'>
                <div className='question-container column'>
                    <label className='question'>How many dogs have you owned in the past?</label>
                    <input type="number" min="0" className='input-box narrow-input'/>
                </div>

                <div className='question-container column'>
                    <label className='question'>How would you describe your dog training abilty?</label>
                    <p className='subtext'>"Trained" is defined as house trained, leash trained, and able to follow basic commands: "sit", "stay", "come", "down", "drop it".</p>
                        <div id="training-options" className='row'>
                            <div className='column'>
                                <img src="/public/assets/beginnerlevel.png" alt="No Experience Icon"/>
                                <label><input type="radio" name="trainerLevel" value="none"/>
                                <br/>Non-Existent<br/><span className='subtext'>"I've never trained a dog."</span></label>
                            </div>

                            <div className='column'>
                                <img src="/public/assets/novicelevel.png" alt="Beginner Experience Icon"/>
                                <label><input type="radio" name="trainerLevel" value="beginner"/>
                                <br/>Beginner<br/><span className='subtext'>"I've trained one or two dogs."</span></label>
                            </div>

                            <div className='column'>
                                <img src="/public/assets/interlevel.png" alt="Intermediate Experience Icon"/>

                                <label><input type="radio" name="trainerLevel" value="intermediate"/>
                                <br/>Intermediate<br/><span className='subtext'>"I've trained three or four dogs."</span></label>
                            </div>
                                
                            <div className='column'>
                                <img src="/public/assets/expertlevel.png" alt="Expert Experience Icon"/>

                                <label><input type="radio" name="trainerLevel" value="professional"/>
                                <br/>Professional<br/><span className='subtext'>"I've trained more than five dogs."</span></label>
                            </div>
                    </div>
                </div>
                <Link to="/householdform"><button className='previous-button'>Previous</button></Link>
                <Link  to="/perfectpupform"><button className='next-button'>Next</button></Link>
            </form>
            {/* <h3>{JSON.stringify(userResponse)}</h3> */}
        </div>
    )
}