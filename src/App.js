import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import AdminLink from './AdminLink'
import KegListPage from './KegListPage';
import AboutPage from './AboutPage';
import AddKeg from './AddKeg';
import Error404 from './Error404';
import Over21Control from './Over21Control';
import {beersInfo} from './beers-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdminActive: false,
      currentKeg: null,
      masterKegList: beersInfo
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
    console.log('admin click')  
  }

  handleAddingNewKeg = (newKeg) => {
    let newMasterBeerList = this.state.masterKegList.slice();
    newMasterBeerList.push(newKeg);
    this.setState({masterKegList: newMasterBeerList})
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Over21Control} />
          <Route path='/about' component={AboutPage} />
          <Route path='/kegs' render={() =><KegListPage masterKegList={this.state.masterKegList} isAdminActive={this.state.isAdminActive} />}/>
          <Route path='/newkeg' render={() =><AddKeg onAddingNewKeg={this.handleAddingNewKeg}/>} />
          {/* <Route path='/keg' render={() =><KegDetailPage onSelectingKeg={this.handleSelectingKeg}/>} /> */}
          <Route component={Error404} />
        </Switch>
        <AdminLink onChangingAdminView={this.handleChangingAdminView}/> 
      </div>
    );
  }
}

export default App;
