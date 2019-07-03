import React from 'react'
import { withNavigation } from 'react-navigation'
import {
  Content,
  List,
  Left,
  Body,
  ListItem,
  Icon,
  Text
} from 'native-base'
import dummy from 'lib/api/dummy'


const SideBar = ({ navigation }) => {
  const addBook = () => {
    navigation.navigate('AddBook')
  }

  return (
		<Content style={{backgroundColor:'#FFFFFF'}}>
			<List>
        <ListItem
          icon
          style={{ paddingVertical: 5 }}
          onPress={addBook}
        >
					<Left>
						<Icon name="add" />
					</Left>
					<Body>
						<Text>Add New Book</Text>
					</Body>
				</ListItem>
        {
          dummy.books.map(book => (
            <ListItem icon key={book.id} style={{ paddingVertical: 5 }}>
              <Body >
                <Text>{book.title}</Text>
              </Body>
            </ListItem>
          ))
        }
			</List>

		</Content>
  )
}

export default withNavigation(SideBar)
