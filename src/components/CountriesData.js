import React from 'react';
import CountriesTotalPop from './CountriesTotalPop';
import IndCountryData from './IndCountryData';
import CountriesSelector from './CountriesSelector';
import CountriesFavSelector from './CountriesFavSelector';

const CountriesData = ({countries, onSelectedCountry, selectedCountry, addToFavourites, favouriteCountries, onSelectedFavouriteCountry}) => {
    return (
        <>
        <h2>Hello, I'm a component. My name is CountriesData</h2>
        <CountriesSelector countries={countries} onSelectedCountry={onSelectedCountry}/>
        <CountriesTotalPop countries={countries}/>
        {selectedCountry && <IndCountryData selectedCountry={selectedCountry} addToFavourites={addToFavourites}/>}
        {favouriteCountries && <CountriesFavSelector favouriteCountries={favouriteCountries} onSelectedFavouriteCountry={onSelectedFavouriteCountry}/>}
        
        </>
    )
}

export default CountriesData