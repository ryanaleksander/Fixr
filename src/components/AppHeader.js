import React from 'react';
import { Header, Button, Icon, Title, Left, Body } from 'native-base'

export default class AppHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}
