import React from 'react';
import {
  Container,
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
const Main = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
      <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Epub Generator
        </Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full onPress={() => alert('Section created')}>
            <Text>ADD SECTION</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default Main
