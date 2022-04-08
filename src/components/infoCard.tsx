import React, {FC, ReactNode} from 'react';
import { Box, Rating, Typography } from "@mui/material";
import { AccessTime  } from "@mui/icons-material";

type IComposition = {
  Title: FC<TTitleProps>;
  Duration: FC<TDurationProps>
}

type ContentProps = {
  children: ReactNode
}

export const InfoCard= ({ children }: ContentProps) => {
  return(
    <Box paddingX={1}>
      {children}
    </Box>
  )
}
type TTitleProps = {
  children: ReactNode
}

const Title:FC<TTitleProps> = ({ children }) => {
  return (
    <Typography variant="subtitle2" component="h2">
      {children}
    </Typography>
  );
}
InfoCard.Title= Title;

type TDurationProps = {
  children: ReactNode
}

const Duration: FC<TDurationProps> = ({ children }) => {
  return (
   <Box sx={{ 
     display: "grid",
     grid: "auto-flow/ 20px 80px"
     }}>
    <AccessTime sx={{
      width: 12.5,
      height: '20px',
    }} />
    <Typography variant="body2" component="p" marginLeft={0.5}>
        {children}
    </Typography>
   </Box>
  )
}

InfoCard.Duration = Duration;

type TRatingProps = {
  children: ReactNode;
  value: number;
}

const Ratings: FC<TRatingProps> = ({ children, value }) => {
  return(
    <Box sx={{
      display: "grid",
      grid: "100%/ 60% 40%",
      margin: ".5rem",
    }}
    marginTop={3}
    >
      <Rating name="read-only" value={value}  precision={0.5} readOnly size='small' />
      <Typography variant="body2" component="p" marginLeft={0.5}>
        {children}
      </Typography>
    </Box>
  )
};

InfoCard.Ratings = Ratings;

type TPrice = {
  children: ReactNode;
}

const Price: FC<TPrice> = ({ children }) => {
  return(
    <Box sx={{
      margin: ".5rem",
    }}
    marginTop={3}
    >
      <Typography variant="h6" component="p" marginLeft={0.5}>
        {children}
      </Typography>
    </Box>
  )
};

InfoCard.Price = Price;