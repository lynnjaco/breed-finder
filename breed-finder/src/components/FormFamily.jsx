export default function FormFamily () {
    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Family</h1>
            <form>
                <label>How many people are in your household?</label>
                <input type="number" name="householdMemberCount" min="1"/>

                <label>Are there any children under 12 years old in your home?</label>
                <input type="radio" name="yes_children" value="Yes"></input>
                <input type="radio" name="no_children" value="No"></input>

                <label>Are any members of your household allergic to dogs?</label>
                <input type="radio" name="yes_allergies" value="Yes"></input>
                <input type="radio" name="no_allergies" value="No"></input>

                <label>Do you already have pets?</label>
                <input type="radio" name="yes_pets" value="Yes"></input>
                    <input type="checkbox" name="dog" value="Dog(s)"/>
                    <input type="checkbox" name="cat" value="Cat(s)"/>
                    <input type="checkbox" name="bird" value="Bird(s)"/>
                    <input type="checkbox" name="rodent" value="Rodent(s)"/>
                    <input type="checkbox" name="livestock" value="Livestock"/>
                <input type="radio" name="no_pets" value="No"></input>

                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}