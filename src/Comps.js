import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';//css file included




class Comps extends React.Component {
constructor(props,context){

  super(props,context)
  this.state={
    checked: false
  }
}

handleChecked(){
  //alert('fgfg')

  this.setState({checked: !this.state.checked})
}
  render() {
    var msg = this.state.checked ? 'Checked' : 'Unchecked';
    return (
<div>
  <input type="checkbox" onChange={() => this.handleChecked()}  Checked={this.state.checked} />
  <h4>the checkbox is  {msg}</h4>
</div>

    );
  }
}

export default Comps;
