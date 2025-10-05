import { Component } from "react";
import '../footer-css/footer-up-part.css'

class FooterUP extends Component {
    render() {
        return(
            <div id="footer-wrapper">
                <div id="left-footer-box">
                    <h1 id="logo-text">Камертон</h1>
                    <p id="text-footer-p">Мы создаем рекламу, которая работает.</p>
                    <p id="text-footer-p">Ваш растущий успех — наша лучшая рекомендация.</p>
                    <a href="#"><img src="#" alt="" /></a>
                    <a href="#"><img src="#" alt="" /></a>
                </div>
                <div id="midle-footer-box">
                    <h2 id="text-navigation">Навигация по сайту</h2>
                    <div id="box-navigation-footer">
                        <a id="footer-main-page" href="#">Главная</a>
                        <a id="footer-services-page" href="#">Услуги</a>
                        <a id="footer-our-page" href="#">О нас</a>
                        <a id="footer-contacts-page" href="#">Контакты</a>
                    </div>
                </div>
                <div id="right-footer-box">
                    <h2 id="footer-our-contacts">Наши контакты</h2>
                    <p id="num-footer">T: 8 (930) 803-33-10</p>
                    <p id="num-footer">T: +7(986) 750-62-00</p>
                    <p id="adres-footer">ул. Ленина, 180,</p>
                    <p id="adres-footer">г. Богородск, 607600</p>
                </div>
            </div>
        )
    }
}

export default FooterUP