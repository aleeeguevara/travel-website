import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

type PropsCollage = {
  id: string;
  images: Image[];
}
type Image = {
  [key: string] : string;
}

export const ImageCollage = ({ id, images }: PropsCollage) => {
  return(
    <ImageList sx={{ height: 350 }} cols={3} rowHeight={164}>
      {images.map((image, index) => (
        <ImageListItem key={index}>
          <img
            src={`${image.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={image.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}