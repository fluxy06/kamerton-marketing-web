import { useState } from 'react'

import './App.css'
import Header from './assets/recource/header-part/header-jsx/header';
import MainBlock from './assets/recource/header-part/header-jsx/main-block';
import MiniComponentOne from './assets/recource/header-part/header-jsx/mini-block-one';
import MiniComponentTwo from './assets/recource/header-part/header-jsx/main-second-block';
import BlockHello from './assets/recource/acq/asq-jsx/block-hello';
import BlockHelloPart from './assets/recource/acq/asq-jsx/block-hello-part-two';
import ButtonDemo from './assets/recource/demo-part/demo-jsx/button-demo';
import CardComponent from './assets/recource/demo-part/demo-jsx/card';
import BlockCards from './assets/recource/demo-part/demo-jsx/block-cards';
import BigComponent from './assets/recource/contact-part/contact-jsx/big-info';
import FooterUP from './assets/recource/footer-part/footer-jsx/footer-up-part';
import FooterBot from './assets/recource/footer-part/footer-jsx/footer-bot-part';

function App() {

  return (
    <>
    <div id="window-wrapper">
      <div id='head'>
        <Header/>
      </div>
      <div id='block-one'>
        <div id='block-left-box'>
          <MainBlock/>
          <div id='block-comps-one-two'>
            <MiniComponentOne/>
            <MiniComponentTwo/>
          </div>
        </div>
        <div id='block-right-box'>
          <img id='logo-image' src="../src/assets/img/img-card.svg" alt="" />
        </div>
      </div>
      <div id='block-two'>
        <BlockHello/>
        <BlockHelloPart/>
      </div>
      <div id='block-tree'>
          <ButtonDemo/>
          <BlockCards/>
      </div>
      <div id='block-four'>
        <BigComponent/>
      </div>
      <div id='block-five'>
          <FooterUP/>
          <FooterBot/>
      </div>
    </div>
    </>
  )
}

export default App
