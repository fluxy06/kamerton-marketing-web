import { Component } from "react";
import "./location.css";
import MiniButton from '../../../mini-components/MiniButton';


class Location extends Component {
  render() {
    return(
        <div id="location">
            <div id="location-button-container">
                <MiniButton id="location-miti-button" contentButton={"Услуги"}/>
            </div>
            <p id="location-text">Осталось выбрать только локацию!</p>
            <div id="location-map-placeholder">
                <h3 id="location-map-text">Здесь будет карта</h3>
            </div>
        </div>
    );
  }
}

export default Location;