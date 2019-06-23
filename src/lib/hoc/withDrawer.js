import React, { Component } from 'react'
import { Drawer, Text } from 'native-base'
import Menu from './Menu'

const WithDrawer = (WrappedComponent) => {
  return class extends Component {
    static navigationOptions = {
      header: null
    }

    constructor (props) {
      super(props)
      this.openDrawer = this.openDrawer.bind(this)
      this.closeDrawer = this.closeDrawer.bind(this)
    }

    openDrawer () {
      this.drawer._root.open()
    }

    closeDrawer () {
      this.drawer._root.close()
    }

    render () {
      const { navigation } = this.props

      return (
        <Drawer
          ref={ref => { this.drawer = ref }}
          content={<Text>TEST</Text>}
          onClose={_ => this.closeDrawer()}
        >
          <WrappedComponent openDrawer={this.openDrawer} {...this.props} />
        </Drawer>
      )
    }
  }
}

export default WithDrawer
