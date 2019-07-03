import React from 'react'
import { Button, Icon } from 'native-base'
import styles from './styles'

const FloatingAddButton = (props) => (
  <Button
    rounded
    style={styles.floatingButton}
    {...props}
  >
    <Icon name='add' />
  </Button>
)

export default FloatingAddButton
