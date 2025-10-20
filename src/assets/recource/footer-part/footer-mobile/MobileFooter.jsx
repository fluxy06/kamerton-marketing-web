import { Component } from "react";
import '../footer-mobile/mobile-footer.css'


class MobileFooter extends Component {
    render() {
        return(
            <div id="mobile-footer">
                <div id="mobile-footer-up-text">
                    <h1 id="footer-boli-text-logo">Камертон</h1>
                    <p id="mobile-pre-logo-text">
                        Вдохновляющая мастерская для<br />мастеров и салонов красоты
                    </p>
                </div>
                <div id="mobile-icons-soc">
                    <a href="#"><img src="../src/assets/img/mobile-instagram.svg" alt="" /></a>
                    <a href="#"><img src="../src/assets/img/mobile-twitter.svg" alt="" /></a>
                    <a href="#"><img src="../src/assets/img/mobile-facebook.svg" alt="" /></a>
                </div>
                <div id="mobile-our-contacts">
                    <p id="mob-or-cont">Наши контакты</p>
                    <div id="mobile-block-p">
                        <p>
                        T: 8 (800)201-80-52
                    </p>
                    <p>
                        T: +7(831)436-48-48
                    </p>
                    <p>
                        T: +7(831)436-48-48
                    </p>
                    </div>
                </div>
                <div id="mobile-navigation">
                    <p id="mob-nav">Навигация по сайту</p>
                    <div id="mobile-block-navi">
                        <a href="#">Продукция</a>
                        <a href="#">Контакты</a>
                        <a href="#">Доставка</a>
                    </div>
                </div>
                <div id="mobile-footer-stroke"></div>
                <div id="footer-mobile-final">
                    <a href="#">Политика конфиденциональности</a>
                    <a href="#">Договор оферты</a>
                    <a href="#">Разработка сайта - GoStack</a>
                </div>
            </div>
        )
    }
}

export default MobileFooter