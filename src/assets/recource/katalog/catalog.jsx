import { useState, useEffect } from "react";
import "./catalog.css";
import Marketing from './components-catalog/marketing/mark';
import ContactForm from '../forms/form-auth/formAuth';
import Location from "./components-catalog/location/location";
import Work from "./components-catalog/work/work";
import Start from "./components-catalog/work/start";
import ServicesCatalog from "./components-catalog/services/sercices";

function Catalog() {
  // --- адаптивность
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 440);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- управление модалкой
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div id="window-wrapper-catalog" className="catalog">
      <Marketing onContactClick={openModal} />
      <Location />
      <Work />
      <Start onContactClick={openModal}/>
      <ServicesCatalog />
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>✕</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ContactForm />
          </div>
        </div>
      )}
    </div>

    
  );
}

export default Catalog;
