import { Component } from "react";
import MiniButton from '../../mini-components/MiniButton';
import BlockInfo from '../contact-jsx/block-info';
import '../mobile/mobile-contact.css'

class MobileContactComponent extends Component {
    render() {
        return(
            <div id="mobile-contact-block">
                <MiniButton id="cont" contentButton="контакты"/>
                <p id="ready">Готовы начать работу?<br/>Свяжитесь с нами удобным для вас<br/>способом.</p>
                <div id="up-mobile-block">
                    <BlockInfo
                            iphone_smile="📍"
                            title="Адрес"
                            info="ул. Ленина, 180,"
                            double_info="г. Богородск, 607600"
                    />
                    <BlockInfo
                                iphone_smile="📞"
                                title="Телефон"
                                info="+7 (987) 540-15-15"
                                double_info="+7 (123) 456-78-90"
                    />
                </div>
                <div id="bot-mobile-block">
                     <BlockInfo
                            iphone_smile="️✉️"
                            title="Email"
                            info="info@kamerton.ru"
                            double_info="kamertonbg@gmail.com"
                    />
                    <BlockInfo
                                iphone_smile="🕒"
                                title="Режим работы"
                                info="Пн-Пт: 10:00 - 20:00"
                                double_info="Сб-Вс: 10:00 - 20:00"
                    />
                </div>
                <div id="map-mobile">
                    <p>Интеграция карты</p>
                </div>
            </div>
        )
    }
}

export default MobileContactComponent