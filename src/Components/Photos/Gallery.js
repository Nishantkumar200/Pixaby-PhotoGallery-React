import { Container, Grid } from "@material-ui/core";
import React from "react";
import useStyle from './GalleryStyle';

const Gallery = ({ photos }) => {
    const classes = useStyle();
  return (
    <Container className ={classes.container}>
      <Grid container spacing ={4}>
        {photos.length?photos.map((photo) => (
          <Grid item sm={12} md ={6} lg={3}>
            <img src={photo.largeImageURL} alt={photo.tags}  className ={classes.imageSize}/>
          </Grid>
        )):"Image Not found"}
      </Grid>
    </Container>
  );
};

export default Gallery;
