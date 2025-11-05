// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import "./App.css";

import Header from "./assets/recource/header-part/header-jsx/header";
import FooterUP from "./assets/recource/footer-part/footer-jsx/footer-up-part";
import FooterBot from "./assets/recource/footer-part/footer-jsx/footer-bot-part";
import MobileFooter from "./assets/recource/footer-part/footer-mobile/MobileFooter";
import MainPage from "./main-page";
import Catalog from "./assets/recource/katalog/catalog";
import ContactForm from "./assets/recource/forms/form-auth/formAuth";

export const ModalContext = createContext({
  openModal: () => {},
});

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 440);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      {/* ✅ контекст, чтобы открыть модалку из любой страницы */}
      <ModalContext.Provider value={{ openModal }}>
        <div id="window-wrapper" className={isModalOpen ? "blurred-background" : ""}>
          <div id="head">
            <Header onContactClick={openModal} />
          </div>

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>

          {isMobile ? (
            <MobileFooter />
          ) : (
            <div id="block-five">
              <FooterUP />
              <FooterBot />
            </div>
          )}
        </div>
      </ModalContext.Provider>

      {/* --- Модалка --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>✕</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ContactForm />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
