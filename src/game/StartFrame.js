import React, { Component } from 'react';
import $ from 'jquery';

class StartFrame extends Component{

constructor(props,context){
  super(props,context)
  this.state = {

  }
}




render()
{



  var stars=[];
  for (var i = 0; i < this.props.numberOfStars; i++) {
    stars.push(<span className="glyphicon glyphicon-star" key={i}></span>);
  }


  return(
    <div id="stars-frame">
<div className="well">

{
  stars
}
</div>
        </div>
  );
}

}
export default StartFrame;
