import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';
import {useFormWithValidation} from '../../hooks/useForm';
import iconSearch from '../../images/search-icon.svg';
import iconSearchInput from '../../images/search-icon-form.svg'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({findMovies, isLoading}) {
    const [filtered, setFiltered] = useState(false);

    const {
        values,
        handleChange,
        resetForm,
    } = useFormWithValidation();

    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!values.movie) {
            setError('Нужно ввести ключевое слово');
        } else {
            findMovies(values.movie);
            setError('');
            resetForm();
        }
    }

    return (
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__form"
                      title="Поиск фильма"
                      name="search-film"
                      onSubmit={handleSubmit}>
                    <div className="search-form__film-container">
                        <img src={iconSearchInput} alt="Значок с лупой"
                             className="search-form__film-icon"/>
                        <input className="search-form__film-input"
                               onChange={handleChange}
                               id="movie"
                               name="movie"
                               type="text"
                               value={values.movie || ''}
                               maxLength="100"
                               placeholder="Фильм"
                               disabled={isLoading}/>
                        <button className="search-form__film-find"
                                type="submit">
                            <img src={iconSearch} alt="Значок с лупой"
                                 className="search-form__film-icon-btn"/>
                        </button>
                    </div>
                    <FilterCheckbox
                        filtered={filtered}
                        handleCheck={(value) => setFiltered(value)}
                    />
                </form>
            </div>
        </section>
    );
}

SearchForm.propTypes = {
    findMovies: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default SearchForm;