import { useEffect, useState } from 'react';
import '../styles/TypeAhead.css'

const TypeAhead = () => {

    const [name, setName] = useState("");
    const [results, setResults] = useState([]);
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const cities = [];

    useEffect(() => {
        fetch(endpoint)
            .then(data => data.json())
            .then(data => cities.push(...data))
            .catch(error => console.log(error));
    });

    function findMatch(input, cities) {
        setName(input);
        return cities.filter(place => {
            const regex = new RegExp(input, 'gi');
            return place.city.match(regex) || place.state.match(regex)
        });
    }

    function formatPopulation(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function displayMatches(name, cities) {
        const matchArray = findMatch(name, cities);
        const tempArray = [];
        // eslint-disable-next-line no-unused-vars
        const resultList = matchArray.slice(0, 100).map(place => {
            const stateName = place.state;
            const cityName = place.city;
            const population = formatPopulation(place.population);
            tempArray.push({ cityName, stateName, population });
            return (
                setResults(tempArray)
            )
        })
    }

    return (
        <>
            <div className='typeAheadContainer'>
                <form className="search-form">
                    <input type="text" className="search" placeholder="" value={name} onChange={e => displayMatches(e.target.value, cities)}></input>
                    <ul className="suggestions">
                        <li>Filter for a city</li>
                        <li>or a state</li>
                        {name !== "" && results.map((place, index)=> {
                            return (
                                <li key={index}>
                                    <span className="name">{place.cityName}, {place.stateName}</span>
                                    <span className="population">Population: {place.population}</span>
                                </li>
                            )
                        })}
                    </ul>
                </form>
            </div>
        </>
    )
}

export default TypeAhead;