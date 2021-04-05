import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Avatar = ({ avatarUrl, name }) => {
    return [
        <img key="image" src={avatarUrl} alt={name} className="avatar" />,
        <span key="username" className="text-secondary">{name}</span>
    ];
}

Avatar.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default memo(Avatar);