import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import AdminLink from './AdminLink'
import KegListPage from './KegListPage';
import AdminControl from './AdminControl';
import AboutPage from './AboutPage';
import AddKeg from './AddKeg';
import Error404 from './Error404';
import Over21Control from './Over21Control';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdminActive: false,
      currentKeg: null
    }
  }

  handleSelectingKeg = (selectedKeg) => {
    var newCurrentKeg = selectedKeg;
    this.setState({currentKeg: newCurrentKeg});
    console.log(newCurrentKeg);
  }

  handleChangingAdminView = () => {
    let newAdminActive = !this.state.isAdminActive;
    this.setState({isAdminActive: newAdminActive})
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Over21Control} />
          <Route path='/about' component={AboutPage} />
          <Route path='/admin' render={() =><AdminControl onChangingAdminView={this.handleChangingAdminView}/>} />
          <Route path='/kegs' render={() =><KegListPage isAdminActive={this.isAdminActive}/>}/>
          <Route path='/add' component={AddKeg} />
          {/* <Route path='/keg' render={() =><KegDetailPage onSelectingKeg={this.handleSelectingKeg}/>} /> */}
          <Route component={Error404} />
        </Switch>
        <AdminLink/> 
      </div>
    );
  }
}

export default App;
