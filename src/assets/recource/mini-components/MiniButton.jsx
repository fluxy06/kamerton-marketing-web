import React, { Component } from "react";
import '../../recource/mini-components/mini-button.css'

class MiniButton extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {
            contentButton
        } = this.props;
        
        return(
            <div id="button-container">
                <button>{contentButton}</button>
            </div>
        );
    }
}

export default MiniButton;