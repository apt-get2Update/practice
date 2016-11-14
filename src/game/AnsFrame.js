import React, { Component } from 'react';
import $ from 'jquery';


class AnsFrame extends Component{

constructor(props,context){
  super(props,context)
  this.state = {

  }
}


render()
{
  var props=this.props;
var selectedNumbers= props.selectedNumbers.map((i)=>{
  return(<span onClick={props.unselectNumber.bind(null,i)} key={i}>{i}</span>)
});
  return(
    <div id="ans-frame">
    <div className="well">
    {
    //   props.selectedNumbers.map((text,i)=>{
    //   return(<span onClick={props.unselectNumber.bind(null,i)}>{text}</span>);
    // })
    selectedNumbers
      }
    </div>
    </div>
  );
}

}
export default AnsFrame;
