import React, { Component } from 'react';
import 'typeface-roboto';
import { Typography, TextField, Button } from '@material-ui/core/';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Typography variant="h3" align="center" gutterBottom>
          Przykładowy H3 - typeface Roboto
        </Typography>
        <TextField
          fullWidth
          gutterBottom
          style={{ margin: '20px' }}
        ></TextField>
        <Button variant="contained" style={{ margin: '20px' }}>
          Default
        </Button>
        <Button variant="contained" color="primary" style={{ margin: '20px' }}>
          Primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: '20px' }}
        >
          Secondary
        </Button>
        <Button variant="contained" disabled style={{ margin: '20px' }}>
          Disabled
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          style={{ margin: '20px' }}
        >
          Link
        </Button>
      </div>
    );
  }
}

export default App;
