import React from "react";

const CountriesTotalPop = ({countries}) => {
    const totalPopulation = function () {
        const totalPop = countries.reduce((runningTotal, country) => {
            return runningTotal + country.population;
        }, 0);
        return totalPop
    }

    return(
        <>
        <h3>Total population of all countries is: {totalPopulation()}</h3>
        </>
    )
}

export default CountriesTotalPop;