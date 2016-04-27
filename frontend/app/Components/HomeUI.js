import React from 'react';


const HomeUI = React.createClass({
  render (){
    return (
      <div>
        {this.props.onDisplayHomePage()}
      </div>
    );
  }
});

export default HomeUI;
