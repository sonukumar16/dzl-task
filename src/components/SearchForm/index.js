import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllGists } from '../../redux/actions/allGists';
import "./styles.css";

const SearchForm = (props) => {

    const dispatch = useDispatch();
    const inputRef = React.createRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let username = inputRef.current.value.trim();

        //if user has not typed anything
        if (username.length === 0) {
            return;
        }

        dispatch(fetchAllGists(username));
    }

    return (
        <form onSubmit={handleSubmit} className="searchform">
            <label />
            <input
                className="form-control inputText "
                type="text"
                placeholder="Search for a user, eg. sonukumar16"
                ref={inputRef} />
        </form>
    );
};

export default SearchForm;
