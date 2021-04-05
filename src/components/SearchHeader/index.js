import React,{memo} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchHeader = ({ children }) => {
    return (
        <div className="header fixed-top">
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child);
            })}
        </div>
    );
};

SearchHeader.propTypes = {
    children: PropTypes.element.isRequired
}

export default memo(SearchHeader);