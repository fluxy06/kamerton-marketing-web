import { Component } from "react";
import '../contact-css/big-component.css'
import HeaderContact from './block-header-contact';
import BlockInfo from './block-info';

class BigComponent extends Component {
    render() {
        return(
            <div id="big-info-box-wrapper">
                <div id="info-main-header">
                    <HeaderContact/>
                </div>
                <div id="five-blocks-info">
                    <div id="four-blocks-info">
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
                    <div id="fifth-block-map">
                        Карта
                        <br />
                        Интеграция карты
                    </div>
                </div>
            </div>
        )
    }
}

export default BigComponent