import { useNavigate } from 'react-router-dom';

export default function FormIntro () {
    const navigate = useNavigate();

    return (
        <>
            <h3>Intro</h3>
            <form>
                <label>Name</label>
                <input type="text" placeholder="First Name"/>
                <label>Email</label>
                <input type="email" placeholder="youremail@email.com"/>
                <label>Age</label>
                <input type="number" />
                <label>Location</label>
                <input type="text" placeholder="Zip Code"/>
            </form>
            <input type="submit" value="Next"/>
        </>
    )
}