import React from 'react'
import { TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Body, Card, CardItem, Text } from 'native-base'

const Article = ({ navigation, chapter }) => {
  const handlePress = () => {
    navigation.navigate({
      routeName: 'ViewChapter',
      params: chapter
    })
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Card>
        <CardItem header>
          <Text>{chapter.title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text numberOfLines={4}>
              {chapter.content}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  )
}

export default withNavigation(Article)
