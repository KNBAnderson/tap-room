import React from 'react';
import SplashPage from './SplashPage';

class Over21Control extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOver21: false
    };
  }

  handleClick = () => {
    this.setState({isover21 : true})
  }

  render(){
    let currentlVisible = null;
    if (this.state.isOver21) {
      currentlVisible = <SplashPage />
    } else {
      currentlVisible = <div id="over21Question">
        <p>Are you over 21?</p>
        <strong onClick={this.handleClick}>Yes</strong><br/>
        <strong>No (lol just click yes)</strong>
      </div>
    }
    return (
      <div>
        {currentlVisible}
      </div>
    );
  }
}

export default Over21Control;