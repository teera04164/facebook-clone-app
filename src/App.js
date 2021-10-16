import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './page/Home'

function App() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#f0f2f5' }}>

      <Router>
        <Navbar />
        <div style={{ height: 'calc(100% - 66px)', paddingTop: '66px' }}>
          <Switch>
            <Route path="/marketplace">
              <About />
            </Route>
            <Route path="/watch">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
