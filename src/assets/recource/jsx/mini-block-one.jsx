import { Component } from "react";
import '../css/mini-component-box-one.css'

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
                    <img src="#" alt="" id="box-image-one"/>
                    <img src="#" alt="" id="box-image-two"/>
                    <img src="#" alt="" id="box-image-three"/>
                    <img src="#" alt="" id="box-image-four"/>
                    <button id="button-image-next"><img src="#" alt="" id="box-image-five"/></button>
                </div>
                </div>
            </div>
        )
    }
}

export default MiniComponentOne