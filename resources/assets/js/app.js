require('./bootstrap');

// import Main from './components/Main';
import React from 'react'
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router , Route , browserHistory } from 'react-router'
import { HashRouter , BrowserRouter, Switch } from 'react-router-dom'

import Header from './components/Header';
import TopKonten from './konten/TopKonten';
import sd from './konten/sd';
import sma from './konten/sma';
import Video from './video/Video';
import ListFisika from './list/ListFisika';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
          <Switch>
            <Router history={browserHistory}>
                <Route path={"/"} exact component={Header}>
                </Route>
            </Router>
          </Switch>
      </BrowserRouter>
    );
  };
}

ReactDOM.render(<App />,
    document.getElementById('root'));
