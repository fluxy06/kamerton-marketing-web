import { Component } from "react";
import './start.css'

class Start extends Component {
    render() {
        const { onContactClick } = this.props;
        return(
            <div className="start">
                <h1>Уже готовы к запуску?<br/>Свяжитесь с нами</h1>
                <div id="start-button-container">
                    <button onClick={onContactClick}>Связаться</button>
                </div>
            </div>
        )
    }
}

export default Start