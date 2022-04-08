import React from 'react';
import { Box, Container } from '@mui/material';
import { Cards } from '../components/cards';

function Home() {

  return (
    <div>     
      <Container>
        <Box margin={5}>
          <Cards />
        </Box>
      </Container>  
    </div>  
  );
}

export default Home;
