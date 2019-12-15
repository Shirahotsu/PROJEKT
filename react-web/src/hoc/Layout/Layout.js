import React, { Component } from 'react';
import 'typeface-roboto';
import Aux from './../Auxiliary/Auxiliary';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Table from '../../components/Table/Table';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <MiniDrawer />
        <Table />
      </Aux>
    );
  }
}

export default Layout;
