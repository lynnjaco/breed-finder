export default function FormFamily () {
    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Family</h1>
            <form>
                <p>Are there any children under 12 years old in your home?</p>
                <input type="radio" name="yes_children" value="Yes"></input>
                <input type="radio" name="no_children" value="No"></input>

                <p>Are any members of your home allergic to dogs?</p>
                <input type="radio" name="yes_allergies" value="Yes"></input>
                <input type="radio" name="no_allergies" value="No"></input>

                <p>Do you already have pets?</p>
                <input type="radio" name="yes_pets" value="Yes"></input>
                <input type="radio" name="no_pets" value="No"></input>
            </form>
        </>
    )
}