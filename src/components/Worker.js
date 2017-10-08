import React from 'react';
import { Card, CardItem, Text, View, Thumbnail } from 'native-base';

export default class Worker extends React.Component {
  render() {
    return (
      <Card style={{ padding: 5, flexDirection: 'row', justifyContent: 'flex-start'}}>
        <View style={{ marginRight: 10 }}>
          <Thumbnail large source={{ uri: "http://via.placeholder.com/85x85"}} />
        </View>
        <View style={{ justifyContent: 'space-around'}}>
          <Text>Tên: Nguyễn Văn A</Text>
          <Text>Chuyên môn: Sửa máy lạnh</Text>
          <Text>Đánh giá: 9,8/10</Text>
        </View>
      </Card>
    )
  }
}
