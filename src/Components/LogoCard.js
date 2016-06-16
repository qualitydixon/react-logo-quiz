import React, { Component, PropTypes } from 'react'
import { ItemTypes } from '../utils/Constants'
import { DragSource } from 'react-dnd'
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
            <img className='logoCard' src={Logos[logo]} />
          </div>}
      </div>
    )
  }
}

LogoCard.propTypes = {
  logo: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  isDropped: PropTypes.bool.isRequired
  }

export default DragSource(ItemTypes.LOGO, logoCardSource, collect)(LogoCard)
