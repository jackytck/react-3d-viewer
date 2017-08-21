import React, { Component } from 'react'
import ContainerDimensions from 'react-container-dimensions'
import Scene3DViewer from './viewer3d/viewer3d'
import { State } from './models'
// import logo from './logo.svg';
import './App.css'

const state = new State()

class App extends Component {
  render() {
    return (
      <ContainerDimensions>
        <Scene3DViewer state={state} />
      </ContainerDimensions>
    )
  }
}

export default App
