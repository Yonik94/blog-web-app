//Default tech and settings:
import React from 'react';
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
import { SingleBlog } from './pages/Single-Blog';
import { MainHeader } from './components/Main-Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App flex column">
        <Router>
          <Route component={MainHeader}></Route>
          <div className="flex grow">
            <Route exact component={Home} path={"/"} />
            <Route component={Admin} path={"/admin/blogs"} />
            <Route component={Admin} path={"/admin/blogs/:blogId"} />
            <Route exact component={Blog} path={"/blogs"} />
            <Route exact component={SingleBlog} path={"/blogs/:blogId"} />
            <Route exact component={SinglePost} path={"/blogs/:blogId/post/:postId"} />
            <Route exact component={Login} path={"/login"} />
            <Route exact component={Login} path={"/signup"} />
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
