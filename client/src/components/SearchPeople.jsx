import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import DisplayPeople from './DisplayPeople';

function SearchPeople() {
  const [searchTerm, setSearchTerm] = useState('');
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [residents, setResidents] = useState([]);

  const firstRender = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      let nextPage = `https://swapi.dev/api/planets`;
      if (!firstRender.current) {
        while (nextPage) {
          const res = await axios.get(nextPage);
          setPlanets((prevPlanets) => [...prevPlanets, ...res.data.results]);
          nextPage = res.data.next;
        }
      }
    };
    fetchData();
    firstRender.current = true;
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
    console.log(searchTerm);

    const peoplePromise = axios.get(
      `https://swapi.dev/api/people?search=${searchTerm}`,
    );

    const filteredPlanets = planets.filter(
      (planet) =>
        planet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        planet.population.includes(searchTerm),
    );

    const residentsPromises = filteredPlanets.map(async (planet) => {
      const residentUrls = planet.residents;
      const residentResponses = await Promise.all(
        residentUrls.map((url) => axios.get(url)),
      );
      return residentResponses.map((res) => res.data);
    });

    const people = await peoplePromise;
    const residents = await Promise.all(residentsPromises);

    const flatResidents = residents.flat();
    const peopleResults = people.data.results;
    // Update state with search results
    setPeople(peopleResults);
    setResidents(flatResidents);
    console.log(peopleResults);
    console.log(flatResidents);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
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
      <DisplayPeople people={people} residents={residents} />
    </>
  );
}

export default SearchPeople;
