import React, { useState } from 'react'
import {
  Form,
  Item,
  Text,
  Input,
  View,
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
} from 'native-base'
import dummy from 'lib/api/dummy'
import styles from './styles'

const AddBook = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = () => {
    navigation.replace({
      routeName: 'Main',
      params: {
        title,
        description,
        id: dummy.books.length + 1
      }
    })
  }

  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Form>
          <Input
            style={styles.title}
            placeholder='Title'
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Input
            style={styles.description}
            placeholder='Description'
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </Form>
      </Content>
      <Footer>
        <FooterTab>
          <Button full onPress={handleAdd}>
            <Text style={{ fontSize: 16 }}>
              ADD BOOK
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

export default AddBook
