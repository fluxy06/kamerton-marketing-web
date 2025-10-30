import { useState, useEffect } from 'react'
import './App.css'

// Импорты компонентов
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
import MobileAcq from './assets/recource/acq/mobile/mobile-acq';
import MiniButton from './assets/recource/mini-components/MiniButton';
import MobileContactComponent from './assets/recource/contact-part/mobile/MobileContact';
import MobileFooter from './assets/recource/footer-part/footer-mobile/MobileFooter';
import ContactForm from './assets/recource/forms/form-auth/formAuth';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 440);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 440);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Управление модалкой
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // блокируем скролл при открытии
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // возвращаем скролл
  };

  return (
    <>
      <div id="window-wrapper" className={isModalOpen ? 'blurred-background' : ''}>
        <div id='header-content'>
          <div id='head'>
            <Header onContactClick={openModal} />
          </div>
        </div>

        <div id='block-one'>
          <div id='block-left-box' className={isModalOpen ? 'blurred-background' : ''}>
            <MainBlock onContactClick={openModal}/>
            <div id='block-comps-one-two'>
              <MiniComponentOne />
              <MiniComponentTwo />
            </div>
          </div>
          <div id='block-right-box'>
            <img id='logo-image' src="../src/assets/img/img-card.svg" alt="" />
          </div>
        </div>

        <div id='block-two' className={isModalOpen ? 'blurred-background' : ''}>
          {isMobile ? (
            <MobileAcq />
          ) : (
            <>
              <BlockHello/>
              <BlockHelloPart onContactClick={openModal}/>
            </>
          )}
        </div>

        <div id='block-tree'>
          {isMobile ? (
            <>
              <MiniButton contentButton="услуги" />
              <CardComponent
                imageUrl="../src/assets/img/mobile-img-card.svg"
                title="Сити-щиты"
                dimensions="размеры: 1.2x1.8m"
              />
              <CardComponent
                imageUrl="../src/assets/img/mobile-img-card-two.svg"
                title="Биллборды"
                dimensions="размеры: 2x4, 3x6m"
              />
              <CardComponent
                imageUrl="../src/assets/img/mobile-img-card-three.svg"
                title="Печать баннеров"
                dimensions="размеры: следует уточнить"
              />
            </>
          ) : (
            <>
              <ButtonDemo />
              <BlockCards />
            </>
          )}
        </div>

        <div id='block-four'>
          {isMobile ? <MobileContactComponent /> : <BigComponent />}
        </div>

        {isMobile ? (
          <MobileFooter />
        ) : (
          <div id='block-five'>
            <FooterUP />
            <FooterBot />
          </div>
        )}
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          {/* Крестик теперь СВЕРХУ, вне формы */}
          <button className="modal-close" onClick={closeModal}>✕</button>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // не закрывать при клике на саму форму
          >
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
