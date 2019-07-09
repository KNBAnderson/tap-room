import React from 'react';

class AdminControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    return (
      <div>
        <p>This is the AdminControl component!</p>
      </div>
    );
  }
}

export default AdminControl;