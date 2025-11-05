import { Component } from "react";
import "../demo-css/card.css";

class CardComponent extends Component {
  handleClick = () => {
    // Проверяем, есть ли переданная функция клика
    if (this.props.onContactClick) {
      this.props.onContactClick();
    }
  };

  render() {
    const { imageUrl, title, dimensions } = this.props;

    return (
      <div
        id="card-wrapper"
        onClick={this.handleClick}
        style={{ cursor: "pointer" }}
      >
        <div
          id="img-banner"
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
        >
          <button id="button-scroll-up"></button>
        </div>
        <div id="block-market">
          <h1 id="reclam">{title}</h1>
          <p id="gabar">{dimensions}</p>
        </div>
      </div>
    );
  }
}

export default CardComponent;
