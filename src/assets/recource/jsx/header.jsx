import { Component } from "react";
import '../css/header.css'

class Header extends Component {
    render() {
        return(
            <div id="header">
                <h1 id="logo-text">КАМЕРТОН</h1>
                <div id="right-header-nav">
                    <div id="links">
                        <p><a href="#" id="about-as">О нас</a></p>
                        <p><a href="#" id="catalog">Каталог</a></p>
                        <p><a href="#" id="services">Услуги</a></p>
                    </div>
                    <button id="contact-header">Связаться</button>
                </div>
            </div>
        )
    }
}

export default Header