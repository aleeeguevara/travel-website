import React from 'react';
import { Container, Grid } from '@mui/material';
import TourCard from './tourCard';
import destinations from '../mock/destinations.json';
import { InfoCard } from './infoCard';
import { Link } from 'react-router-dom';

export const Cards: React.FC = () => {
  return(
    <Container>
    <Grid container spacing={2}>
      {destinations.countries.map((dest) => (
        <TourCard img={dest.url} title={dest.title} key={dest.id}>
          <InfoCard>
            <Link to={`${dest.id}`} style={{color: 'inherit', textDecoration: 'none'}}>
              <InfoCard.Title>
                {dest.country}
              </InfoCard.Title>
            </Link>
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