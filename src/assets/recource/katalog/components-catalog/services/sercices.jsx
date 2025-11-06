// sercices.jsx
import { Component } from "react";
import './services.css';
import MiniButton from '../../../mini-components/MiniButton';
import CardComponent from '../../../demo-part/demo-jsx/card';

class ServicesCatalog extends Component {

  scrollToTop = () => {
  window.scrollTo(0, 0);
  try {
    const scroller = document.scrollingElement || document.documentElement || document.body;
    scroller.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  } catch (err) {
    console.error('scroll error', err);
  }
};

  render() {
    return (
      <div className="services-catalog">
        <MiniButton contentButton={"Услуги"} />
        <div id="card-services-componetns">
          <div id="card-componetn-one">
            <h1>Вернуться <br />на вверх</h1>
            <div id="button-scroll-container">
              <button onClick={this.scrollToTop} id="button-scroll">↑</button>
            </div>
          </div>
          <CardComponent 
                imageUrl="../src/assets/img/card-img-page-two.svg"
                title="Биллборды"
                dimensions="размеры: 2x4, 3x6m"
          />
          <CardComponent 
                imageUrl="../src/assets/img/mobile-img-card-three.svg"
                title="Печать баннеров"
                dimensions="размеры: следует уточнить"
          />
        </div>
      </div>
    );
  }
}

export default ServicesCatalog;
