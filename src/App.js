import React from "react";
import "./styles.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  myStyle: {
    backgroundColor: "red",
    fontStyle: "oblique",
    color: (props) => props.color
  },
  iconStyle: {
    fontSize: "80px",
    "& svg": {
      fontSize: "80px"
    }
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
        Material UI
      </Button>
      <Button color="primary" variant="outlined" disabled>
        Material UI Button
      </Button>
      <Button color="primary" variant="outlined" disabled>
        Material UI Button
      </Button>
      <Button color="secondary" variant="outlined" fullWidth>
        Material UI Button
      </Button>
      <div className={classes.iconStyle}>
        <PlaylistAddIcon />
        <PlaylistAddCheckIcon />
        <PlaylistPlayIcon />
        <QueueMusicIcon />
        <DeleteIcon />
        <DeleteForeverIcon />
        <PlayArrowIcon />
        <PauseIcon />
        <PlayCircleFilledWhiteIcon />
        <PlayCircleOutlineIcon />
        <PauseCircleOutlineIcon />
      </div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Tooltip title="Play">
        <IconButton aria-label="play">
          <PlayArrowIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </div>
  );
}
