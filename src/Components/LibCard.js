import React, { Component, PropTypes } from 'react'
import { ItemTypes } from '../utils/Constants'
import { DropTarget } from 'react-dnd'
import { makePath } from '../utils/helpers'
import ReactLogo from '../../res/logos/React.svg'
import Babel from '../../res/logos/Babel.svg'
import Flux from '../../res/logos/Flux.svg'
import Redux from '../../res/logos/Redux.svg'
import Nuclide from '../../res/logos/Nuclide.svg'
import Webpack from '../../res/logos/Webpack.svg'
import Relay from '../../res/logos/Relay.svg'
import ESLint from '../../res/logos/ESLint.svg'
import ReduxObservable from '../../res/logos/Redux-Observable.svg'
import GraphQL from '../../res/logos/GraphQL.svg'
import Flow from '../../res/logos/Flow.svg'
const Logos = {
  React: ReactLogo,
  Babel: Babel,
  Flux: Flux,
  Redux: Redux,
  Nuclide: Nuclide,
  Webpack: Webpack,
  Relay: Relay,
  ESLint: ESLint,
  ReduxObservable: ReduxObservable,
  GraphQL: GraphQL,
  Flow: Flow
}
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
          }} src={Logos[logoGiven]} />
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
