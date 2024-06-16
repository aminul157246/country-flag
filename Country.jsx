import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry,handleVisitedFlags}) => {
    
    const {name, flags, population, area}  = country;

    const [visited, setVisited] = useState(false)

    const visitHandler = () => {
        setVisited(!visited)
    }

// console.log(handleVisitedFlags)


    return (
        <div className= {`country-css ${visited && 'visited-css'}`}>
            <h4 style={{ color : visited && 'red',fontSize : visited && '32px'}}>Name : {name.common } </h4>
            <img src= {flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add flag</button>
            <button onClick={visitHandler}> {visited ? 'Visited' : 'will visit'}</button>
            {
                (visited ? 'i visited this country' : 'i want to visit the country')
            }
            
        </div>
    );
};

export default Country;