import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

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
  borderRadius: 2,
};

function InfoModal({ handleOpen, selectedCharacter, handleCloseModal }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (selectedCharacter) {
      const fetchFilms = async () => {
        const filmPromises = selectedCharacter.films.map((filmUrl) =>
          axios.get(filmUrl),
        );
        const filmResponses = await Promise.all(filmPromises);
        setFilms(filmResponses.map((response) => response.data));
      };
      fetchFilms();
    }
  }, [selectedCharacter]);

  return (
    <Modal open={handleOpen} onClose={handleCloseModal}>
      <Box sx={style}>
        {selectedCharacter && (
          <>
            <CloseIcon
              onClick={handleCloseModal}
              sx={{
                cursor: 'pointer',
                float: 'right',
                width: '30px',
              }}
            />
            <Typography>Name: {selectedCharacter.name}</Typography>
            <Typography>Films:</Typography>
            <Box display='flex' flexDirection='column' gap='0.5rem'>
              {films.map((film) => (
                <Box key={film.title}>
                  <Typography>Title: {film.title}</Typography>
                  <Typography>Release Date: {film.release_date}</Typography>
                  <Typography>
                    Opening Crawl: {film.opening_crawl.slice(0, 130) + '...'}
                  </Typography>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default InfoModal;
