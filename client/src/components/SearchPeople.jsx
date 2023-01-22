import React, { useState } from 'react';
import axios from 'axios';

function SearchPeople() {
  const [searchTerm, setSearchTerm] = useState('');
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
    fetchData();
    console.log(searchTerm);
  };

  const fetchData = async () => {
    const peoplePromise = axios.get(
      `https://swapi.dev/api/people?search=${searchTerm}`,
    );
    const planetPromise = axios.get(
      `https://swapi.dev/api/planets?search=${searchTerm}`,
    );

    const result = await Promise.all([peoplePromise, planetPromise]);

    const people = result[0].data.results;
    const planets = result[1].data.results;
    const planetResidents = await Promise.all(
      planets.map(async (planet) => {
        const residentsPromise = planet.residents.map(async (residentUrl) => {
          const residentResponse = await axios.get(residentUrl);
          return residentResponse.data;
        });
        const residents = await Promise.all(residentsPromise);
        return residents;
      }),
    );
    console.log(people);
    console.log(planets);
    console.log(planetResidents.flat());
    // setPeople(peopleResponse.data.results);
    // setPlanets(planetResponse.data.results);
    // console.log(searchTerm);
    // console.log(peopleResponse.data.results);
    // console.log(planetResponse.data.results);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            type='text'
            name='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type='submit'>Search</button>
      </form>
    </>
  );
}

export default SearchPeople;
