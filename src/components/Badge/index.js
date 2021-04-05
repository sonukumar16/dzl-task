import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Badge = ({ files }) => {
    const [mounted, setMounted] = useState(false);
    const [fileArr, setFileArr] = useState([]);

    if (!mounted) {
        const filesArray = []
        for (let file in files) {
            let language = files[file].language;
            //remove duplicate file types
            if (filesArray.indexOf(language) === -1) {
                filesArray.push(language);

            }
        }
        setFileArr(filesArray)
    }

    useEffect(() => {
        setMounted(true)
    }, []);

    return (
        <ul>
            {fileArr.map((language, index) => {
                return (<li className="badge" key={index}>{language}</li>);
            })}
        </ul>
    );
}

Badge.propTypes = {
    files: PropTypes.object.isRequired
}

export default memo(Badge);