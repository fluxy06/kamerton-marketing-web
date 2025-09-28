import { useState } from 'react'

import './App.css'
import Header from './assets/recource/jsx/header';
import MainBlock from './assets/recource/jsx/main-block';
import MiniComponentOne from './assets/recource/jsx/mini-block-one';
import MiniComponentTwo from './assets/recource/jsx/main-second-block';

function App() {

  return (
    <>
    <div id="window-wrapper">
      <Header/>
      <div id='block-one'>
        <div id='block-left-box'>
          <MainBlock/>
          <div id='block-comps-one-two'>
            <MiniComponentOne/>
            <MiniComponentTwo/>
          </div>
        </div>
        <div id='block-right-box'>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
