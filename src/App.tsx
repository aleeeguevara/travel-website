import {  Container, Grid } from '@mui/material';
import React from 'react';
import './App.css';
import TourCard from './components/tourCard';
import destinations from './mock/destinations.json';

type Country = {
  country: string,
  url: string,
  title: string,
}
type Destinations = {
  countries: Country[];
}

function App() {
  return (
    <Container>
      <Grid container spacing={2} className="App">
        {destinations.countries.map((dest) => (
          <TourCard img={dest.url} title={dest.title}>
            {dest.country}
          </TourCard>
          ))} 
      </Grid>
    </Container>
  );
}

export default App;
