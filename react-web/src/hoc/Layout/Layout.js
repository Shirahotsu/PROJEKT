import React, { Component } from 'react';
import 'typeface-roboto';
import Aux from './../Auxiliary/Auxiliary';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <MiniDrawer />
      </Aux>
    );
  }
}

export default Layout;
