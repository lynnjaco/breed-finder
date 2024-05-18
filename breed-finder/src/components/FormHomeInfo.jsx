export default function FormHomeInfo () {
    return (
        <>
            <h3>Tell Me About Your</h3>
            <h1>Home</h1>

            <form>
                <label>Which dwelling best describes your home type?</label>
                    <input type="radio" name="smallApartmentCondo" value="Apartment/Condo (Studio - 2 Bedrooms)"/>
                    <input type="radio" name="largeApartmentCondo" value="Apartment/Condo (2+ Bedrooms)"/>
                    <input type="radio" name="townhouse" value="Townhouse"/>
                    <input type="radio" name="house" value="House"/>
                    <input type="radio" name="mobileHome" value="Mobile Home/RV"/>
                    <input type="radio" name="tinyHome" value="Tiny Home"/>
                    <input type="radio" name="ranch" value="Ranch/Farm"/>

                <label>Which environment best describes where you live?</label>
                    <input type="radio" name="rural" value="Rural/Remote"/>
                    <input type="radio" name="city" value="City/Urban"/>
                    <input type="radio" name="suburbs" value="Suburban"/>

                <label>Does your home have any size restrictions for dogs?</label>
                    <input type="radio" name="yes_restrictions" value="Yes"/>
                        <input type="number" name="max-weight" placeholder="Max Permitted Weight" min="1" max="200"/>
                    <input type="radio" name="no_restrictions" value="No"/>
                <input type="submit" value="Next"/>
            </form>
        </>
    )
}