import { Component } from "react";
import CardComponent from "./card";
import "../demo-css/block-cards.css";

class BlockCards extends Component {
  render() {
    const { onCardClick } = this.props;

    return (
      <div id="block-cards-wrapper">
        <CardComponent
          onContactClick={onCardClick}
          imageUrl="../src/assets/img/img-card.svg"
          title="Сити-щиты"
          dimensions="размеры: 1.2x1.8m"
        />

        <CardComponent
          onContactClick={onCardClick}
          imageUrl="../src/assets/img/img-card-two.svg"
          title="Биллборды"
          dimensions="размеры: 2x4, 3x6m"
        />

        <CardComponent
          onContactClick={onCardClick}
          imageUrl="../src/assets/img/img-card-three.svg"
          title="Печать баннеров"
          dimensions="размеры: следует уточнить"
        />
      </div>
    );
  }
}

export default BlockCards;
