import React from "react";

const CountriesFavSelector =({favouriteCountries, onSelectedFavouriteCountry}) => {
    
    const handleChange = function(e) {
        const selectedFavouriteCountry = favouriteCountries[e.target.value];
        onSelectedFavouriteCountry(selectedFavouriteCountry);
    }
        const FavouriteCountryOptions = favouriteCountries.map((favouriteCountry, index) =>{
            return <option value={index} key={index}>{favouriteCountry.name.common}</option>
        }) 
        return(
            <select onChange={handleChange}>
                {FavouriteCountryOptions}
            </select>
        )   
    }



    
export default CountriesFavSelector