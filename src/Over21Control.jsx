import React from 'react';

class Over21Control extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick(){
    console.log('Hey, you clicked me! I do not have code to change my state quite yet, but I will in a moment!');
  }

  render(){
    return (
      <div>
        <p>Are you over 21?</p>
        <strong onClick={this.handleClick}>Yes</strong><br/>
        <strong>No (lol just click yes)</strong>
      </div>
    );
  }
}

export default Over21Control;