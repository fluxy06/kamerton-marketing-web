import { useContext, useState, useEffect } from "react";
import { ModalContext } from "./App"; // важно: путь укажи относительно App.tsx
import "./App.css";
import { useNavigate } from "react-router-dom";
import MiniComponentOne from "./assets/recource/header-part/header-jsx/mini-block-one";
import MiniComponentTwo from "./assets/recource/header-part/header-jsx/main-second-block";
import MainBlock from "./assets/recource/header-part/header-jsx/main-block";
import MobileAcq from "./assets/recource/acq/mobile/mobile-acq";
import BlockHello from "./assets/recource/acq/asq-jsx/block-hello";
import BlockHelloPart from "./assets/recource/acq/asq-jsx/block-hello-part-two";
import MiniButton from "./assets/recource/mini-components/MiniButton";
import CardComponent from "./assets/recource/demo-part/demo-jsx/card";
import ButtonDemo from "./assets/recource/demo-part/demo-jsx/button-demo";
import BlockCards from "./assets/recource/demo-part/demo-jsx/block-cards";
import MobileContactComponent from "./assets/recource/contact-part/mobile/MobileContact";
import BigComponent from "./assets/recource/contact-part/contact-jsx/big-info";

function MainPage() {
  const { openModal } = useContext(ModalContext); // теперь берём функцию из контекста
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 440);
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate("/catalog"); // 🔁 Переход на страницу каталога
  };
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div id="window-wrapper">
        {/* --- Блок 1 --- */}
        <div id="block-one">
          <div id="block-left-box">
            <MainBlock onContactClick={openModal} />
            <div id="block-comps-one-two">
              <MiniComponentOne />
              <MiniComponentTwo />
            </div>
          </div>
          <div id="block-right-box">
            <img id="logo-image" src="../src/assets/img/img-card.svg" alt="" />
          </div>
        </div>

        {/* --- Блок 2 --- */}
        <div id="block-two">
          {isMobile ? (
            <MobileAcq onContactClick={openModal} />
          ) : (
            <>
              <BlockHello />
              <BlockHelloPart onContactClick={openModal} />
            </>
          )}
        </div>

        {/* --- Блок 3 --- */}
        <div id="block-tree">
          {isMobile ? (
            <>
              <MiniButton contentButton="услуги" />
              <CardComponent onContactClick={goToCatalog}
                imageUrl="../src/assets/img/mobile-img-card.svg"
                title="Сити-щиты"
                dimensions="размеры: 1.2x1.8m"
              />
              <CardComponent onContactClick={goToCatalog}
                imageUrl="../src/assets/img/mobile-img-card-two.svg"
                title="Биллборды"
                dimensions="размеры: 2x4, 3x6m"
              />
              <CardComponent onContactClick={goToCatalog}
                imageUrl="../src/assets/img/mobile-img-card-three.svg"
                title="Печать баннеров"
                dimensions="размеры: следует уточнить"
              />
            </>
          ) : (
            <>
              <ButtonDemo />
              <BlockCards onCardClick={goToCatalog}/>
            </>
          )}
        </div>

        {/* --- Блок 4 --- */}
        <div id="block-four">
          {isMobile ? <MobileContactComponent /> : <BigComponent />}
        </div>
      </div>
    </>
  );
}

export default MainPage;
