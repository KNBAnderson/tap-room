import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import AdminLink from './AdminLink'
import SplashPage from './SplashPage';
import KegListPage from './KegListPage';
import KegDetailPage from './KegDetailPage';
import AdminKegListPage from './AdminKegListPage';
import AboutPage from './AboutPage';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <KegListPage/> */}
      <Switch>
        <Route exact path='/' component={SplashPage} />
        <Route path='/about' component={AboutPage} />
        {/* <Route path='/admin' component={AdminKegListPage} /> */}
        <Route path='/kegs' component={KegListPage} />
        {/* <Route path='/keg/this' component={KegDetailPage} /> */}
      </Switch>
      <AdminLink/> 
    </div>
  );
}

export default App;
