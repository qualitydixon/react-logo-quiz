import React, { Component, PropTypes } from 'react'
import { ItemTypes } from './Constants/Constants'
import { DropTarget } from 'react-dnd'
import { makePath } from './utils/helpers'

const libCardTarget = {
  canDrop (props) {
    return props.canDropLogo(props.idx)
  },
  drop (props, monitor) {
    props.onDrop(monitor.getItem())
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class LibCard extends Component {
  renderOverlay (color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.8,
        backgroundColor: color
      }} />
    )
  }
  render () {
    const { connectDropTarget, isOver, canDrop, logoGiven } = this.props
    return connectDropTarget(
      <div className='libCard'>
        {logoGiven
          ? <img className='miniLogoCard' style={{
            borderRadius: '5px',
            width: '70px',
            height: '70px'
          }} src={makePath(logoGiven)} />
          : <div className='logoPlaceholder' />}
        <span className='libName'>{this.props.title}</span>
      </div>
    )
  }
}

LibCard.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  canDropLogo: PropTypes.func.isRequired,
  logoGiven: PropTypes.string.isRequired
}

export default DropTarget(ItemTypes.LOGO, libCardTarget, collect)(LibCard)
