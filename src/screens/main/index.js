import React, { useState, useEffect } from 'react';
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

import dummy from 'lib/api/dummy'
import WithDrawer from 'lib/hoc/withDrawer'
import FloatingAddButton from 'components/FloatingAddButton'
import Articles from 'components/Articles'


const Main = ({ navigation, openDrawer, closeDrawer }) => {
  const [currentBook, setCurrentBook] = useState(0)
  const [books, setBooks] = useState(dummy.books)

  const handleAdd = () => {
    navigation.navigate('AddChapter')
  }

  const handleAddBook = ({ title, description, id }) => {
  }

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={openDrawer}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Text style={{ color: '#fff' }}>Epub Gen</Text>
        </Body>
        <Right />
      </Header>
      <Content>
        <Articles chapters={books[currentBook].chapters}/>
      </Content>
      <FloatingAddButton onPress={handleAdd}/>
    </Container>
  );
}

export default WithDrawer(Main)
