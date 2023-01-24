import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import InfoModal from './InfoModal';

function DisplayPeople({ characters, loader }) {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const selectPerson = (person) => {
    setDisplayModal(true);
    setSelectedCharacter(person);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
    setSelectedCharacter(null);
  };

  return (
    <Box height='90%' overflow='auto'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        height='fit-content'>
        <Typography variant='h5'>Characters</Typography>
        {characters.length > 0 ? (
          <Box display='flex' flexDirection='column' gap='0.5rem'>
            {characters.map((person) => (
              <Box key={person.name}>
                <Typography
                  onClick={() => selectPerson(person)}
                  sx={{ cursor: 'pointer' }}>
                  Name: {person.name}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : loader ? (
          <CircularProgress />
        ) : (
          <Typography>No data</Typography>
        )}
      </Box>
      <InfoModal
        handleOpen={displayModal}
        selectedCharacter={selectedCharacter}
        handleCloseModal={handleCloseModal}
      />
    </Box>
  );
}

export default DisplayPeople;
