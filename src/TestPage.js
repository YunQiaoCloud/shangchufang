import React from 'react'
import logo from './assets/logo.svg'

const TestPage = function() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Heading Content!
        </h1>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>
          src/App.js
        </code>
        and save to reload.
      </p>
    </div>
  )
}

export default TestPage
