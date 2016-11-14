import React, { Component } from 'react';

import './App.css';//css file included



class App extends Component {

  constructor(props,context){

    super(props,context)
    this.state={
      counter:0
    }
  }
count(){
  this.setState({counter:this.state.counter+1});
}
render(){
  return(
    <button onClick={()=>this.count()}>{this.state.counter}</button>
  );
}
}

export default App;
