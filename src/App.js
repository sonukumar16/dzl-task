import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Search from './screens/search';
import GistDetails from './screens/gistDetails';
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <Route path="/" exact={true} component={Search} />
          <Route path="/:id" component={GistDetails} />
        </div>
        </Router>
  );
}

export default App;
