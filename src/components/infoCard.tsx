import { Box, Typography } from "@mui/material";

type ContentProps = {
  children: React.ReactNode;
}

const infoCard = ( children: ContentProps) => {
  return(
    <Box paddingX={1}>
      {children}
    </Box>
  )
}
type Props = {
  children: React.ReactNode;
}

const Title = ( children: Props ) => {
  return (
    <Typography variant="subtitle2" component="h2">
      {children}
    </Typography>
  );
}
infoCard.Title= Title;

const Duration = (children: Props) => {
  return (
   <Box>
    <Typography variant="body1" component="p">
      {children}
    </Typography>
   </Box>
  )
}


infoCard.Duration = Duration;

export default infoCard;