import React, { useState } from 'react'
import { FlatGrid } from 'react-native-super-grid'
import Article from 'components/Article'
import dummy from 'lib/api/dummy'

const Articles = ({ chapters }) => {
  return (
    <FlatGrid
      itemDimension={150}
      items={chapters}
      renderItem={({ item }) => (
        <Article chapter={item} />
      )}
    />
  )
}

export default Articles
