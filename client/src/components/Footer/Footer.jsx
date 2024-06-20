import largeLogo from "../../img/a_la_tarantazza_logo.png";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-line"></div>
            <div className="extras">
                <img src={largeLogo} alt="Великий логотип A La Tarantazza" className="large-logo-img" />
                <div className="extra-link-lists">
                    <div className="extra-list">
                        <h4>Що Ми Робимо</h4>
                        <ul>
                            <li><a href="#">Кулінарні книги</a></li>
                            <li><a href="#">Дослідження</a></li>
                            <li><a href="#">Нагороди</a></li>
                            <li><a href="#">Преса</a></li>
                            <li><a href="#">Місця</a></li>
                        </ul>
                    </div>
                    <div className="extra-list">
                        <h4>Приєднуйтесь До Нас</h4>
                        <ul>
                            <li><a href="#">Кар'єра</a></li>
                            <li><a href="#">Посадити Плодові Дерева</a></li>
                            <li><a href="#">Літній Похід</a></li>
                            <li><a href="#">Весняний Пікнік</a></li>
                        </ul>
                    </div>
                    <div className="extra-list">
                        <h4>Інформація</h4>
                        <ul>
                            <li><a href="#">Допомога/Контакти</a></li>
                            <li><a href="#">Умови Використання</a></li>
                            <li><a href="#">Політика Конфіденційності</a></li>
                            <li><a href="#">Згода на Використання Файлів Cookie</a></li>
                            <li><a href="#">Політика Без Реклами</a></li>
                        </ul>
                    </div>
                    <div className="extra-list">
                        <h4>Партнери</h4>
                        <ul>
                            <li><a href="#">Благодійність заради Майбутнього</a></li>
                            <li><a href="#">Стань Дивом: Здача Крові</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
