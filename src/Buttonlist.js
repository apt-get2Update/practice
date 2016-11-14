import React, { Component } from 'react';
import Button from './Button';
import Result from './Result';
import './App.css';//css file included



class Buttonlist extends Component {

  constructor(props,context){

    super(props,context)
    this.state={
      counter:0
    }
  }
count(increment){
  this.setState({counter:this.state.counter+increment});
}

render(){
  return(
  <div>
    <Button handleClick={(increment)=>this.count(increment)} increment={1}/>
    <Button handleClick={(increment)=>this.count(increment)} increment={5}/>
    <Button handleClick={(increment)=>this.count(increment)} increment={10}/>
    <Button handleClick={(increment)=>this.count(increment)} increment={100}/>
    <Result>{this.state.counter}</Result>
  </div>
  );
}
}

export default Buttonlist;
