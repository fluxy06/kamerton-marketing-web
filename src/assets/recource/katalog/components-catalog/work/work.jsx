import { Component } from "react";
import './work.css';
import MiniButton from '../../../mini-components/MiniButton';

class Work extends Component {
    render() {
        return (
            <div className="work">
                <div className="work-button-container">
                    <MiniButton contentButton="как это работает" />
                </div>
                <p className="work-text">
                    Сейчас мы все расскажем. Все намного проще чем вам кажется!
                </p>
                <div className="work-image-container">
                    <div className="work-image-one">
                        <h1 className="work-image-one-text">01</h1>
                        <h2 className="work-image-one-location">Выберите локацию</h2>
                        <p className="work-image-one-description">
                            Укажите на карте нужные остановки или районы города.
                        </p>
                    </div>
                    <div className="work-image-two">
                        <h1 className="work-image-one-text">02</h1>
                        <h2 className="work-image-one-location">Предоставьте макет</h2>
                        <p className="work-image-one-description">
                            Мы поможем с адаптацией дизайна под формат сити-щита.
                        </p>
                    </div>
                    <div className="work-image-three">
                        <h1 className="work-image-one-text">03</h1>
                        <h2 className="work-image-one-location">Запускайте рекламу</h2>
                        <p className="work-image-one-description">
                            Мы производим монтаж, и ваша реклама начинает работать.
                        </p>
                        </div>  
                </div>
            </div>
        );
    }
}

export default Work;