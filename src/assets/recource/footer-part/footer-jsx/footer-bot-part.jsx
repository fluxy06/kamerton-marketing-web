import { Component } from "react";
import '../footer-css/footer-bot-part.css'

class FooterBot extends Component {
    render() {
        return(
            <div id="bot-footer-part">
                <div id="footer-line"></div>
                <div id="footer-nav-bottom">
                    <p id="polit"><a href="#">Политика конфиденциональности</a></p>
                    <p id="doc"><a href="#">Договор оферты</a></p>
                    <p id="creators"><a href="#">Разработка сайта - GoStack</a></p>
                </div>
            </div>
        )
    }
}
export default FooterBot