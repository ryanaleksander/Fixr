import React from 'react';
import { Title, Button, Icon, Container, Content, Text, Card, CardItem, Header, Left, Right, Body } from 'native-base';

import Worker from './Worker';
import AppHeader from './AppHeader';

export default class WorkerList extends React.Component {
  openDrawer() {

  }
  render() {
    return (
      <Container style={{ backgroundColor: "#EEEEEE" }}>
        <AppHeader title="Danh sách thợ" openDrawer={this.props.openDrawer}/>
        <Content>
          <Worker />
        </Content>
      </Container>
    );
  }
}
