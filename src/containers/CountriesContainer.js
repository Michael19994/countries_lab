import React, { useEffect, useState } from "react";
import CountriesData from "../components/CountriesData";

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([])

    useEffect(() => {
        getCountries();
    }, [])

    const addToFavourites = function(country){
        const newFavouriteCountries = [...favouriteCountries, country]
        setFavouriteCountries(newFavouriteCountries)
    }

    const onSelectedCountry = function(country){
        setSelectedCountry(country);
    }

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }
    
    return (
        <>
        <h1>I'm a react component. My name is CountriesContainer</h1>
        <CountriesData
        countries={countries}
        onSelectedCountry={onSelectedCountry}
        selectedCountry={selectedCountry}
        addToFavourites={addToFavourites}
        favouriteCountries={favouriteCountries}
        />
        </>
    )
}

export default CountriesContainer;