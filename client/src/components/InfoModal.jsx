import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function InfoModal({ handleOpen, selectedCharacter, handleCloseModal }) {
  return (
    <Modal open={handleOpen} onClose={handleCloseModal}>
      <Box sx={style}>
        {selectedCharacter && (
          <>
            <Typography>Name: {selectedCharacter.name}</Typography>
            <Typography>Films:</Typography>
            <Box display='flex' flexDirection='column' gap='0.5rem'>
              {selectedCharacter.films.map((film, index) => (
                <Typography sx={{ cursor: 'pointer' }} key={index}>
                  {film}
                </Typography>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default InfoModal;
