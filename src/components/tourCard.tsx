import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";

export type Props = { 
  img: string;
  title: string;
  children: React.ReactNode;
}

const TourCard: React.FC<Props> = ({ title, img, children }) => {
  return (
   <Grid item xs={3}>
      <Paper elevation={3}>
        <ImageCard src={img} alt={`${title} tour`} />
        {children}
      </Paper>
   </Grid>
  );
};

export const ImageCard = styled.img`
  width: 100%;
  height: 6rem;

`;

export default TourCard;
