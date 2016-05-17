import React, { Component, PropTypes } from 'react'
import { ItemTypes } from './Constants/Constants'
import { DragSource } from 'react-dnd'
import { makePath } from './utils/helpers'

const logoCardSource = {
  beginDrag (props) {
    return {
      name: props.logo
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class LogoCard extends Component {
  static propTypes = {
    logo: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    isDropped: PropTypes.bool.isRequired
  }
  render () {
    const { connectDragSource, isDragging, isDropped, logo } = this.props
    return connectDragSource(
      <div style={{margin: '10px', width: '170px', height: '170px'}}>
        {isDropped
          ? <div />
          : <div style={{
            opacity: isDragging ? 0 : 1,
            cursor: 'move',
            textAlign: 'center'
          }}>
            <img className='logoCard' src={makePath(logo)} />
          </div>}
      </div>
    )
  }
}

export default DragSource(ItemTypes.LOGO, logoCardSource, collect)(LogoCard)
