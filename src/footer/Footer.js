import React from "react";
import './Footer.css'

function Footer(){
    return(
        <React.Fragment>
            <footer>
                <div className="container">
                     <div class="footerLeft">
                         <div class="footerMenu">
                                             <h1 class="fMenuTitle">
                                             Про нас
                                             </h1>
                                             <ul class="fList">
                            <li class="fListItem">Услуги</li>
                            <li class="fListItem">Команда</li>
                            <li class="fListItem">Инструменты</li>
                            <li class="fListItem">Клиенты</li>
                                             </ul>
                                         </div>
                     </div>
                     <div class="footerLeft">
                <div class="footerMenu">
                    <h1 class="fMenuTitle">
                    Услуги
                    </h1>
                    <ul class="fList">
                        <li class="fListItem">Разработка мобильных приложений</li>
                        <li class="fListItem">Разработка и внедрение ERP систем</li>
                        <li class="fListItem">UI / UX дизайн</li>
                        <li class="fListItem">IT консалтинг</li>
                        <li class="fListItem">Оптимизация инфраструктуры</li>
                    </ul>
                </div>
            </div>
            <div class="footerLeft">
                <div class="footerMenu">
                    <h1 class="fMenuTitle">
                    Портфолио
                    </h1>
                    <ul class="fList">
                        <li class="fListItem">Delever</li>
                        <li class="fListItem">Sms.uz</li>
                        <li class="fListItem">Iman</li>
                    </ul>
                </div>
            </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;