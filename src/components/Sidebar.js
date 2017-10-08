import React, { Component } from 'react';
import { Text, Content, Container, List, ListItem, Body, Left } from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Content style={{ backgroundColor:'#FFFFFF' }}>
          <List>
            <ListItem>
              <Text>Danh sách thợ</Text>
            </ListItem>
            <ListItem>
              <Text>Vị trí của bạn</Text>
            </ListItem>
            <ListItem>
              <Text>Lọc theo gần</Text>
            </ListItem>
            <ListItem>
              <Text>Phí sữa chửa</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
