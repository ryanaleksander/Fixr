import React from 'react';
import { View, Card, Icon, Container, Content, Text, Form, Input, InputGroup, Label, H1, Row, Col, Grid, Item, Button, CardItem, Body } from 'native-base';

export default class Login extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <Container style={{backgroundColor: '#BBDEFB'}}>
        <Content contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
          <Card style={{flex: 0, marginLeft: 15, marginRight: 15}}>
            <CardItem>
              <Body style={{alignItems: 'center'}}>
                <H1 style={{marginTop: 20, marginBottom: 20}}>Welcome to Fixr</H1>
                <Item fixedLabel>
                  <Label>Tài khoản</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Mật khẩu</Label>
                  <Input secureTextEntry={true}/>
                </Item>
                <Button block style={{margin: 10}}>
                  <Text>Đăng nhập</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
