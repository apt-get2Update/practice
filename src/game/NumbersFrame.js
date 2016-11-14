import React, { Component } from 'react';
import $ from 'jquery';


class NumbersFrame extends Component{

constructor(props,context){
  super(props,context)
  this.state = {

  }
}


render()
{

var numbers=[],className,
selectNumber=this.props.selectNumber,
selectedNumbers=this.props.selectedNumbers,
usedNumbers=this.props.usedNumbers;
for (var i = 1; i <=9; i++) {
className="number selected-"+(selectedNumbers.indexOf(i)>=0);
className+=" used-"+(usedNumbers.indexOf(i)>=0);

  numbers.push(
    <div className={className} key={i} onClick={selectNumber.bind(null,i)}>{i}</div>
  );
}

  return(
    <div id="numbers-frame">
    <div className="well">

        {numbers }

    </div>
    </div>
  );
}

}
export default NumbersFrame;
