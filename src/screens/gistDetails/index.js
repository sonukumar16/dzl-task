import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchSingleGist } from '../../redux/actions/singleGist';
import Forks from '../../components/Forks';
import './styles.css';

const GistDetailsInner = (props) => {
  const singleGist = useSelector(state => state.singleGistReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  //show the data that is coming in. This will keep the user engaged
  //and he will see something on the screen.
  //forks are loaded by another api call.
  const { description, files } = props.location.state;

  useEffect(() => {
    const gistId = props.match.params.id;
    dispatch(fetchSingleGist(gistId));
  }, [])

  const renderForks = () => {
    const { isLoading, error, forks } = singleGist;
    if (isLoading) {
      return (<p className="text-secondary">Loading ...</p>);
    }
    if (forks.length && !error) {
      return (
        <Forks forks={forks.slice(0, 3)} />
      );
    } else {
      return (
        <span className="text-danger indent-left">{error}</span>
      );
    }
  }
  return (
    <div className="container">
      <div className="details-box">
        <p className="lead">{(description) || 'No Description'}</p>
        <div className="files-box">
          <p className="text-primary">Files:</p>
          <ul className="indent-left">
            {Object.values(files).map((file, index) => {
              return (
                <li key={index} className="text-secondary">
                  <a href={file.raw_url} target="_blank" className="text-secondary">
                    {file.filename}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="forks-box">
          <p className="text-primary">Forks:</p>
          {renderForks()}
        </div>
      </div>
      <div className="back-button">
        <button type="button" className="btn btn-secondary" onClick={() => history.push("/")}>Back</button>
      </div>

    </div>
  );
};

export default GistDetailsInner;
