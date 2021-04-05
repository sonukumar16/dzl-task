import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const Forks = ({ forks }) => {
    return (
        <ul className="indent-left">
            {forks.map((fork, index) => {
                return (
                    <li key={index}>
                        <a href={`https://gist.github.com/${fork.id}`} target="_blank">
                            <Avatar avatarUrl={fork.user.avatar_url} name={fork.user.login} />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}


Forks.propTypes = {
    forks: PropTypes.array.isRequired
}

export default memo(Forks);

