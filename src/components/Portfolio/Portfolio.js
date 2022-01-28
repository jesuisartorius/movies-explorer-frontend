import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__links-item">
                    <p className="portfolio__link-title">Статичный сайт</p>
                    <a href="/movies" className="portfolio__link"
                       rel="noreferrer">
                        ↗
                    </a>
                </li>
                <li className="portfolio__links-item">
                    <p className="portfolio__link-title">Адаптивный сайт</p>
                    <a href="/movies" className="portfolio__link"
                       rel="noreferrer">
                        ↗
                    </a>
                </li>
                <li className="portfolio__links-item">
                    <p className="portfolio__link-title">Одностраничное
                        приложение</p>
                    <a href="https://yandex.ru/"
                       className="portfolio__link" target="_blank"
                       rel="noreferrer">
                        ↗
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;