import { Component } from "react";
import '../css-header/mini-component-box-one.css'

class MiniComponentOne extends Component {
    render() {
        return(
            <div id="mini-block-one-wrapper">
                <div id="mini-mini-block-one">
                    <div id="mini-block-box-text">
                    <h1 id="number-box">5</h1>
                    <p id="mini-block-one-text">лучших<br/>расположений</p>
                </div>
                <div id="container-examples-locate">
                    <img src="../src/assets/img/img-mini-one.svg" alt="Картинка 1" id="box-image-one"/>
                    <img src="../src/assets/img/img-mini-two.svg" alt="Картинка 2" id="box-image-two"/>
                    <img src="../src/assets/img/img-mini-three.svg" alt="Картинка 3" id="box-image-three"/>
                    <img src="../src/assets/img/img-mini-one.svg" alt="Картинка 4" id="box-image-four"/>
                    <button id="button-image-next">Еще</button>
                </div>
                </div>
            </div>
        )
    }
}

export default MiniComponentOne