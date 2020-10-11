//Default tech and settings:
import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';

// Import services and states files:
import { store } from './store/index';
//Import components for using:
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { Blog } from './pages/Blog';
import { Login } from './pages/Login';
import { SinglePost } from './pages/Single-Post';
import { MainHeader } from './components/Main-Header';
function App() {
  return (
    <Provider store={store}>
      <div className="App flex column">
        <Router>
          <Route component={MainHeader}></Route>
          {/* <MainHeader></MainHeader> */}
          <div className="flex grow">
            <Route exact component={Home} path={"/"} />
            <Route component={Admin} path={"/admin"} />
            <Route exact component={Blog} path={"/blog"} />
            <Route exact component={SinglePost} path={"/blog/post/:id"} />
            <Route exact component={Login} path={"/login"} />
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
