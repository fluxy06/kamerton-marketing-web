import { useState } from 'react'

import './App.css'
import Header from './assets/recource/jsx/header';
import MainBlock from './assets/recource/jsx/main-block';

function App() {

  return (
    <>
    <div id="window-wrapper">
      <Header/>
      <div id='block-one'>
        <MainBlock/>
      </div>
    </div>
    </>
  )
}

export default App
