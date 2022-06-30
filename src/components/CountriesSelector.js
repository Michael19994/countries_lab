import React from "react";

const CountriesSelector =({countries, onSelectedCountry}) => {

    const handleChange = function(e) {
        const selectedCountry = countries[e.target.value];
        onSelectedCountry(selectedCountry);
    }

    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name.common}</option>
    })
    return(
        <select onChange={handleChange}>
            {countryOptions}
        </select>

    )
}


export default CountriesSelector;