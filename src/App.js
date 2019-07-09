import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import AdminLink from './AdminLink'
// import SplashPage from './SplashPage';
import KegListPage from './KegListPage';
// import KegDetailPage from './KegDetailPage';
import AdminControl from './AdminControl';
import AboutPage from './AboutPage';
import AddKeg from './AddKeg';
// import AdminKeg from './AdminKeg';
import Error404 from './Error404';
import Over21Control from './Over21Control';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Over21Control} />
        <Route path='/about' component={AboutPage} />
        <Route path='/admin' component={AdminControl} />
        <Route path='/kegs' component={KegListPage} />
        <Route path='/add' component={AddKeg} />
        {/* <Route path='/keg/this' component={KegDetailPage} /> */}
        <Route component={Error404} />
      </Switch>
      <AdminLink/> 
    </div>
  );
}

export default App;
