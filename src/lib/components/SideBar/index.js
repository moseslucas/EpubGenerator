import React from 'react'
import {
  Content,
  List,
  Left,
  Body,
  ListItem,
  Icon,
  Text
} from 'native-base'
import dummy from '../../api/dummy'


const SideBar = () => {
  return (
		<Content style={{backgroundColor:'#FFFFFF'}}>
			<List>
				<ListItem icon>
					<Left>
						<Icon name="add" />
					</Left>
					<Body>
						<Text>Add New Book</Text>
					</Body>
				</ListItem>
        {
          dummy.books.map(book => (
            <ListItem icon key={book.id}>
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

export default SideBar
