import React from 'react'
import { FlatGrid } from 'react-native-super-grid'
import Article from 'components/Article'

const Articles = () => (
  <FlatGrid
    itemDimension={150}
    items={[1,2,3,4,5]}
    renderItem={({ item }) => (
      <Article />
    )}
  />
)

export default Articles
