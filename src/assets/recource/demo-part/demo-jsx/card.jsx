import { Component } from "react";
import '../demo-css/card.css'


class CardComponent extends Component {
    render() {
        const {
            imageUrl,
            title,
            dimensions,
        } = this.props
        return(
            <div id="card-wrapper">
                <div id="img-banner" style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
                    <button id="button-scroll-up"></button>
                </div>
                <div id="block-market">
                    <h1 id="reclam">{title}</h1>
                    <p id="gabar">{dimensions}</p>
                </div>
            </div>
        )
    }
}

export default CardComponent