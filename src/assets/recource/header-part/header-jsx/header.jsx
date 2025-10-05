import { Component } from "react";
import '../css-header/header.css'

class Header extends Component {
    render() {
        return(
            <div id="header">
                <h1 id="logo-text-header">КАМЕРТОН</h1>
                <div id="right-header-nav">
                    <div id="links">
                        <p id="header-nav"><a href="#" id="about-as-header">о нас</a></p>
                        <p id="header-nav"><a href="#" id="services">услуги</a></p>
                        <p id="header-nav"><a href="#" id="contacts">контакты</a></p>
                    </div>
                    <div id="button-container-header">
                        <button id="contact-header">связаться</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;