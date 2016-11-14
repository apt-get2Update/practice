import React, { Component } from 'react';

import './App.css';//css file included



class Button extends Component {

handle(){
  this.props.handleClick(this.props.increment);
}
render(){
  return(
    <button onClick={()=>this.handle()}>+{this.props.increment}</button>
  );
}
}

export default Button;
