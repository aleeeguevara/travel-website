import React from 'react';
import {  Container, Grid } from '@mui/material';
import TourCard from './tourCard';
import destinations from '../mock/destinations.json';
import { InfoCard } from './infoCard';

export const Cards: React.FC = () => {
  return(
    <Container>
    <Grid container spacing={2} className="App">
      {destinations.countries.map((dest) => (
        <TourCard img={dest.url} title={dest.title}>
          <InfoCard>
            <InfoCard.Title>
              {dest.country}
            </InfoCard.Title>
            <InfoCard.Duration>
              {dest.time}
            </InfoCard.Duration>
          </InfoCard>
          <InfoCard.Ratings value={dest.starts}>
            {dest.starts} ({dest.reviews})
          </InfoCard.Ratings>
          <InfoCard.Price>
            {dest.price}
          </InfoCard.Price>
        </TourCard>
        ))} 
    </Grid>
  </Container>
  )
}