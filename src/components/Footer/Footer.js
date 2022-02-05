import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__about-project">Учебный проект Яндекс.Практикум
                х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copyright">
                    &copy;
                    {' '}
                    {new Date().getFullYear()}
                </p>
                <ul className="footer__links">
                    <li className="footer__links-item">
                        <a href="https://practicum.yandex.ru"
                           className="footer__link" target="_blank"
                           rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__links-item">
                        <a href="https://github.com/"
                           className="footer__link" target="_blank"
                           rel="noreferrer">Github</a>
                    </li>
                    <li className="footer__links-item">
                        <a href="https://www.facebook.com/"
                           className="footer__link" target="_blank"
                           rel="noreferrer">Facebook</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;