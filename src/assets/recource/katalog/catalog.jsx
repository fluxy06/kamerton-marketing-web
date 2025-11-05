import { useState, useEffect } from "react";
import "./catalog.css"; // если у тебя есть стили

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

  // --- сам контент
  return (
    <div className="catalog">
      <h1>Каталог товаров</h1>
      <p>Здесь будет отображаться каталог товаров.</p>

      <button onClick={openModal}>Открыть модалку</button>

      {/* пример модалки, если хочешь проверить */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>✕</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>Модалка работает!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;
