import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';


function Main() {
    const ref = React.createRef();

    const scrollTo = () => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
            <Header/>
            <main className="main">
                <Promo/>
                <NavTab>
                    <button onClick={() => scrollTo()} type="button"
                            className="nav-tab__link">Узнать больше
                    </button>
                </NavTab>
                <AboutProject ref={ref}/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
                <Footer/>
            </main>
        </>
    );
}

export default Main;