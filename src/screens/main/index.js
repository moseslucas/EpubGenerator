import React from 'react';
import {
  Container,
  Drawer,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
import { FlatGrid } from 'react-native-super-grid'

import WithDrawer from 'lib/hoc/withDrawer'
import FloatingAddButton from 'components/FloatingAddButton'
import Articles from 'components/Articles'


const Main = ({ openDrawer, closeDrawer }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={openDrawer}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Text>Epub Gen</Text>
        </Body>
        <Right />
      </Header>
      <Content>
        <Articles />
      </Content>
      <FloatingAddButton />
    </Container>
  );
}

export default WithDrawer(Main)
