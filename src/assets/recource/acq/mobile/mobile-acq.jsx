import { Component } from "react";

class MobileAcq extends Component {
    render() {
        return(
            <div id="mobile-acq-block">
                <button id="mobile-button-about-as">О нас</button>
                <div id="mobile-about-as-text">
                    <h1 id="mobile-h1">Давайте знакомится</h1>
                    <p id="mobile-p">Мы — команда профессионалов из Богородска,
                        которая знает и любит свое дело.
                        Наша цель — предлагать решения, которые действительно
                        работают и приносят ощутимый результат нашим клиентам.
                        Мы ценим ваше доверие и строим долгосрочные
                        партнерские отношения, основанные на качестве,
                        ответственности и взаимном уважении.</p>
                </div>
                <button id="mobile-button-contact">Связаться</button>
            </div>
        )
    }
}

export default MobileAcq