import React, { Component } from 'react';
import 'typeface-roboto';
import Aux from './../Auxiliary/Auxiliary';
import MiniDrawer from '../../components/MiniDrawer/MiniDrawer';
import Table from '../../components/Table/Table';
import FormDialog from '../../components/FormDialog/FormDialog';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <MiniDrawer />
        <Table />
        <FormDialog />
      </Aux>
    );
  }
}

export default Layout;
