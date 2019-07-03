import React from 'react'
import { Body, Card, CardItem, Text } from 'native-base'

const Article = () => {
  return (
    <Card>
      <CardItem header>
        <Text>Title</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>blabla</Text>
        </Body>
      </CardItem>
    </Card>
  )
}

export default Article
