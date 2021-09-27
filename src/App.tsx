import React from 'react';
import logo from './logo.svg';
import './App.css';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={true}
            />
           ))}
        </Switch>
      </BrowserRouter>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
