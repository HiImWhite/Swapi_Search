import React from 'react';

function DisplayPeople(props) {
  return (
    <div>
      {props.people.length > 0 && (
        <>
          <h2>Characters</h2>
          {props.people.map((person) => (
            <div key={person.name}>
              <p>Name: {person.name}</p>
            </div>
          ))}
        </>
      )}
      {props.residents.length > 0 && (
        <>
          <h2>Residents</h2>
          {props.residents.map((resident) => (
            <div key={resident.name}>
              <p>Name: {resident.name}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default DisplayPeople;
