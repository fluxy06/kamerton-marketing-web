import { Component } from "react";
import './mark.css'


class Marketing extends Component {
    render() {
        const { onContactClick } = this.props;
        return(
            <div id="marketing">
                <div id="left-marketing-box">
                    <div id="mark-container">
                        <div id="mark-up-left-box">
                        <h1>Сити-щиты: реклама, которая работает 24/7</h1>
                        <p>Это современные рекламные конструкции,<br/>
                            расположенные на остановках общественного<br/>
                            транспорта. Они эффективно охватывают пешеходов,<br/>
                            пассажиров и водителей,
                            донося ваше сообщение до<br/>самой активной аудитории города.</p>
                        <div id="mark-button-box">
                            <button onClick={onContactClick}>Связаться</button>
                        </div>
                    </div>
                    </div>
                    <div id="bottom-left-boxs">
                        <div id="left-mini-mark-box">
                            <div id="mark-text-mini-box-one">
                                <h1>30%</h1>
                                <h2>увеличение<br/>продаж</h2>
                            </div>
                            <div id="mark-text-mini-box-two">
                                <img src="../src/assets/img/infografh.svg" alt="" />
                                <div id="catalog-stroke"></div>
                            </div>
                        </div>
                        <div id="right-mini-mark-box">
                             <div id="mark-text-mini-box-one-right">
                                <h1>85%</h1>
                                <h2>cмотрят<br/>вашу рекламу</h2>
                            </div>
                            <div id="mark-text-mini-box-two-right">
                                <img src="../src/assets/img/infografh.svg" alt="" />
                                <div id="catalog-stroke"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <img id="logo-image" src="../src/assets/img/img-card.svg" alt="" />
            </div>
        )
    }
}

export default Marketing