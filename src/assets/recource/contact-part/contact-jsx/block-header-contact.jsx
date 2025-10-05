import { Component } from "react";
import '../contact-css/header-contact.css'

class HeaderContact extends Component {
    render() {
        return(
            <div id="header-info-block">
                <button id="info-contacts">КОНТАКТЫ</button>
                <p id="info-text">Готовы начать работу? Свяжитесь с нами удобным для вас способом.</p>
            </div>
        )
    }
}

export default HeaderContact