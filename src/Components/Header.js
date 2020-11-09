import React from "react";

import { Typography } from "@material-ui/core";
import useStyle from "./HeaderStyle";

const Header = () => {
  const classes = useStyle();
  return (
    <div>
      <Typography variant="h2" className ={classes.heading}>Pixaby - Gallery</Typography>
      <Typography variant="h5" className ={classes.subtitle}>Search What is in your Mind</Typography>
    </div>
  );
};

export default Header;
