import React from 'react'
import { Text, View, Container, Content } from 'native-base'
import styles from './styles'

const ViewChapter = ({ navigation }) => {
  const { title, content } = navigation.state.params
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </Content>
    </Container>
  )
}

export default ViewChapter
