import React from 'react';

var navStyle = {
  display: 'inlineBlock'
};

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
