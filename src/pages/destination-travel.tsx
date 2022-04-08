import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Params, useParams } from 'react-router-dom';
import { ImageCollage } from '../components/imageCollage';
import destinations from '../mock/destinations.json';


export const DestinationTravel: React.FC = () => {
  const {id}: Readonly<Params<string>> = useParams();
  return(
    <Container>
        {destinations.countries.map((idMap) => {
          if (idMap.id.toString() === id) return (
          <Container sx={{ marginTop: '2rem'}}>
            <Typography variant="h3" component="h2" sx={{ textAlign: 'center', color: 'primary.main'}}>
              Get now your ticket to this amazing adventure in {idMap.country}
            </Typography>
            <Box marginTop={3} sx={{display:'grid', grid: '100%/ 54% 46%'}}>
                <img src={idMap.url} alt={idMap.title} style={{height: '350px'}} />
                <ImageCollage  id={id} images={idMap.images} />
            </Box>
            <Typography variant='h4' component='h3' marginTop={2}>About This Ticket</Typography>
            <Typography variant='h5' component='p' marginTop={2}>{idMap.info}</Typography>
          </Container>            
          )
          return undefined;
      } ) }
    </Container>
  )
}