import React from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
export default function App() {
  return (
    <div className="App">
      <Button color="primary" variant="outlined">
        Material UI Button
      </Button>
      <Button color="primary" variant="outlined" disabled>
        Material UI Button
      </Button>
      <Button color="primary" variant="outlined" fullWidth>
        Material UI Button
      </Button>
    </div>
  );
}
