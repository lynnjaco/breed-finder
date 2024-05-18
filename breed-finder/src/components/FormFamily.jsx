export default function FormFamily () {
    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Family</h1>
            <form>
                <label>Are there any children under 12 years old in your home?</label>
                <input type="radio" name="yes_children" value="Yes"></input>
                <input type="radio" name="no_children" value="No"></input>

                <label>Are any members of your home allergic to dogs?</label>
                <input type="radio" name="yes_allergies" value="Yes"></input>
                <input type="radio" name="no_allergies" value="No"></input>

                <label>Do you already have pets?</label>
                <input type="radio" name="yes_pets" value="Yes"></input>
                <input type="radio" name="no_pets" value="No"></input>

                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}