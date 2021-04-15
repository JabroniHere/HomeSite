import { Route, Switch } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path={'/'} component={About} />
        <Route path={'/resume'} component={Resume} />
        <Route path={'/portfolio'} component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
