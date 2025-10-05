import { Component } from "react";
import '../acq-css/block-hello.css'


class BlockHello extends Component {
    render() {
        return(
            <div id="block-hello">
                <button id="about-as">о нас</button>
                <h1 id="go-hello">Давайте знакомиться!</h1>
            </div>
        )
    }
}

export default BlockHello