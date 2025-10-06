import { Component } from "react";
import '../css-header/mini-component-two.css'


class MiniComponentTwo extends Component {
    render() {
        return(
            <div id="box-wrapper">
                <div id="block-text-header">
                    <h1 id="percent-header">80%</h1>
                    <div>
                        <p id="speed-header">скорость<br />охвата</p>
                    </div>
                </div>
                <div id="box-infografic">
                    <img src="../src/assets/img/infografh.svg" alt="infografic" id="infografic-img"/>
                    <div id="line-bottom"></div>
                </div>
            </div>
        )
    }
}

export default MiniComponentTwo