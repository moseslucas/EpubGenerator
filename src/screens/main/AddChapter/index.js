import React from 'react'
import {
  Form,
  Item,
  Text,
  Input,
  View,
  Container,
  Content
} from 'native-base'
import styles from './styles'

const AddChapter = ({ navigation }) => {
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Form>
          <Input
            autoFocus
            style={styles.title}
            placeholder='Title'
          />
          <Input
            style={styles.content}
            placeholder='Content'
            multiline
          />
        </Form>
      </Content>
    </Container>
  )
}

export default AddChapter
