import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const SwapiApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/1/').then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Typography>{data.name}</Typography>
      <Typography>Population: {data.population}</Typography>
    </Box>
  );
};

export default SwapiApi;
