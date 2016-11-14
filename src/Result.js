import React, { Component } from 'react';

import './App.css';//css file included



class Result extends Component {

  constructor(props,context){

    super(props,context)
    this.state={
      counter:0
    }
  }

render(){
  return(
    <h3>{this.props.children}</h3>
  );
}
}

export default Result;
