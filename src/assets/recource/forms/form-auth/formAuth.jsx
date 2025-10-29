import {Component} from "react";
import '../form-auth/formAuth.css'

class ContactForm extends Component {
    render() {
        return (
            <div id='form-contact'>
                <div id='form-contact-header-text'>
                    <h1>Связаться с нами</h1>
                    <p>Для связи с нами оставьте заявку</p>
                </div>
                <div id='form-contact-block-info'>
                    <div id='block-one-contact'>
                        <p>Имя</p>
                        <input type="text" placeholder="Имя"/>
                    </div>
                    <div id='block-two-contact'>
                        <p>Телефон</p>
                        <input type="text" placeholder="+7(999) 999 99-99"/>
                    </div>
                    <div id='block-three-contact'>
                        <p>E-mail</p>
                        <input type="text" placeholder="your@email.ru"/>
                    </div>
                    <div id='block-four-contact'>
                        <p>Сообщение</p>
                        <input type="text" id="more-message" placeholder="Расскажите о вашем проекте.."/>
                    </div>
                    <button id='sumbit-query'>Оставить заявку</button>
                </div>
            </div>
        )
    }
}

export default ContactForm