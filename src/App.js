import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { Scene, Stack, Router } from 'react-native-router-flux';

import Login from './components/Login';
import WorkerList from './components/WorkerList';
import Sidebar from './components/Sidebar';

export default class App extends Component {
  closeDrawer() {
    this.drawer._root.close();
  }

  openDrawer() {
    this.drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Router>
          <Stack key="root">
            <Scene key="login" component={Login} initial={true} hideNavBar={true}/>
            <Scene key="workerList" component={WorkerList} openDrawer={this.openDrawer.bind(this)} hideNavBar={true}/>
          </Stack>
        </Router>
      </Drawer>
    );
  }
}
