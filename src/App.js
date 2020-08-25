import React from "react";
import "./styles.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  myStyle: {
    backgroundColor: "red",
    fontStyle: "oblique",
    color: (props) => props.color
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.myStyle} variant="h1" color="primary">
        Headline
      </Typography>
      <Button color="primary" variant="outlined">
        Material UI Button
      </Button>
      <Button color="primary" variant="outlined" disabled>
        Material UI Button
      </Button>
      <Button color="secondary" variant="outlined" fullWidth>
        Material UI Button
      </Button>
    </div>
  );
}
