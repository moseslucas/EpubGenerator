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
import WithDrawer from '../../lib/hoc/withDrawer'

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
    </Container>
  );
}

export default WithDrawer(Main)
