import { Component } from "react";
import '../css-header/main-block.css'

class MainBlock extends Component {
    render() {
        const { onContactClick } = this.props;
        return(
            <div id="main-wrapper">
                <div id="info">
                    <h1 id="main-h">Самая эффективная реклама в Богородске</h1>
                    <p id="main-p">Ваш бизнес увидят даже те, кого не берут обычные таргетированные объявления. Максимальный охват новой аудитории.</p>
                    <button id="contact-main" onClick={onContactClick}>Связаться</button>
                </div>
            </div>
        )
    }
}

export default MainBlock