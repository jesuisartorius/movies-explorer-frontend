import React from 'react';
import './SavedMovies.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({isLoading}) {
    return (
        <div className="saved-movies">
            <Header/>
            <SearchForm/>
            <MoviesCardList isLoading={isLoading}/>
            <Footer/>
        </div>
    );
}

SavedMovies.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default SavedMovies;