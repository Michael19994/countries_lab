import React from "react";

const IndCountryData = ({selectedCountry, addToFavourites}) => {
    console.log(typeof(selectedCountry))

    const handleClick = function(){
        addToFavourites(selectedCountry)
    }

    return (
        <>
        <h1>Selected Country is:</h1>
        <h1>{selectedCountry.name.common}</h1>
        <h2>{selectedCountry.population}</h2>
        <h2 onClick={handleClick}>addToFavourites</h2>
        </>
    )
}

export default IndCountryData;