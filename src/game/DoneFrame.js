import React, { Component } from 'react';
import $ from 'jquery';

class DoneFrame extends Component{
render(){
  return(
    <div className="well text-center">
    <h2>{this.props.doneStatus}</h2>
    <button className="btn btn-default" onClick={this.props.resetGame}>play again!</button>
    </div>
  );
}
}
export default DoneFrame;
