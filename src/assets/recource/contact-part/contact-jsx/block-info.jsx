import { Component } from "react";
import '../contact-css/block-info.css'

class BlockInfo extends Component {
    render()    {
        const {
            iphone_smile,
            title,
            info,
            double_info
        } = this.props
        return(
            <div id="container-block-info">
                    <h1 id="iphone-smile">{iphone_smile}</h1>
                    <p id="title">{title}</p>
                    <p id="info">{info}<br/>{double_info}</p>
            </div>
        )
    }
}

export default BlockInfo