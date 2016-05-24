import React, { Component } from 'react'
import LogoCard from './LogoCard'
import LibCard from './LibCard'
import Navigation from './Navigation'
import Modal from 'react-modal'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { Libs, Logos } from './Constants/Constants'
import { libState, checkVictory, shareURL } from './utils/helpers'
import update from 'react/lib/update'
require('../stylesheets/main.less')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      libCards: libState(),
      droppedLogos: [],
      modalOpen: false,
      score: 0
    }
  }
  handleDrop (index, item) {
    const { name } = item
    this.setState(update(this.state, {
      libCards: {
        [index]: {
          hasLogo: {
            $set: true
          },
          logoGiven: {
            $set: name
          }
        }
      },
      droppedLogos: name ? {
        $push: [name]
      } : {}
    }))
  }
  canDropLogo (idx) {
    return !this.state.libCards[idx].hasLogo
  }
  isDropped (name) {
    return this.state.droppedLogos.indexOf(name) > -1
  }
  onSubmitQuiz (libCards) {
    this.setState({
      modalOpen: true,
      score: checkVictory(libCards)
    })
  }
  closeModal () {
    this.setState(update(this.state, {
      modalOpen: {
        $set: false
      },
      droppedLogos: {
        $set: []
      }
    }))
  }
  render () {
    const buttonClass = `btn submit btn-primary ${this.state.droppedLogos.length === Libs.length ? '' : 'disabled'}`
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navigation />
        <div className='quizContainer'>
          <div className='cards'>
            {Logos.map((lib, idx) =>
              <LogoCard key={idx} logo={lib} isDropped={this.isDropped(lib)} />
            )}
          </div>
          <div>
            <ul className='libList'>
              {Libs.map((lib, idx) =>
                <li key={idx}><LibCard
                  canDropLogo={(idx) => this.canDropLogo(idx)}
                  onDrop={(item) => this.handleDrop(idx, item)}
                  logoGiven={this.state.libCards[idx].logoGiven}
                  idx={idx} title={lib} /></li>
              )}
            </ul>
          </div>
        </div>
        <button onClick={() => this.onSubmitQuiz(this.state.libCards)} className={buttonClass}>
            {'Submit'}
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          style={customStyles}
          closeTimeoutMS={150}
          onRequestClose={() => this.closeModal()}
        >
          <div className='modalContainer'>
            <h2>{'Thanks for playing!'}</h2>
            <span className='scoreText'>{'You got '}<span className='score'>{`${this.state.score}/${Libs.length}`}</span>{' answers correct.'}</span>
            <a href={shareURL(this.state.score)} target='_blank'><button className='btn twitterButton'>
              {'Tweet'}
            </button></a>
          </div>
        </Modal>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App)
