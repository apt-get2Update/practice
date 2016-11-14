import React, { Component } from 'react';

import AnsFrame from './AnsFrame';
import ButtonFrame from './ButtonFrame';
import StartFrame from './StartFrame';
import NumbersFrame from './NumbersFrame';
import DoneFrame from './DoneFrame';


class Game extends Component{

constructor(props,context){
  super(props,context)
  this.state = {
    numberOfStars:Math.floor(Math.random()*9)+1,
      selectedNumbers:[],
      correct:null,
      redraws:5,
      doneStatus:null,
      usedNumbers:[]
  }
}

resetGame(){
  this.setState({
    numberOfStars:Math.floor(Math.random()*9)+1,
      selectedNumbers:[],
      correct:null,
      redraws:5,
      doneStatus:null,
      usedNumbers:[]
  });
}

selectNumber(selectNumber){
  if(this.state.selectedNumbers.indexOf(selectNumber)<0){
  this.setState({
    selectedNumbers:this.state.selectedNumbers.concat(selectNumber),
    correct:null
  });
}
}

unselectNumber(selectNumber){
  var selectsNumbers=this.state.selectedNumbers,
  indexOfNumber = selectsNumbers.indexOf(selectNumber);
selectsNumbers.splice(indexOfNumber,1);
this.setState({selectedNumbers:selectsNumbers,
    correct:null
});

}


sumOfSelectedNumbers(){
  console.log(this.state.selectedNumbers.reduce((p,n)=>{return p+n;}));
  return this.state.selectedNumbers.reduce((p,n)=>{return p+n;},0)
}

checkAnswer(){
  var correct=(this.state.numberOfStars===(this.sumOfSelectedNumbers()));
  this.setState({correct:correct});
}

acceptAnswer(){
  //usedNumbers...
var usedNumbers=this.state.usedNumbers.concat(this.state.selectedNumbers);
this.setState({
  selectedNumbers:[],
  usedNumbers:usedNumbers,

  correct:null,
      numberOfStars:Math.floor(Math.random()*9)+1
},function(){
  this.updateDoneStatus();
});
}

redraw(){
if(this.state.redraws >0){
  this.setState({
    numberOfStars:Math.floor(Math.random()*9)+1,
    selectedNumbers:[],
      correct:null,
      redraws:this.state.redraws-1
  },
  function(){
    this.updateDoneStatus();
  });
}
}


updateDoneStatus(){
  if(this.state.usedNumbers.length===9){
    this.setState({doneStatus:'DONE Nice!'});
return;
  }
  if(this.state.redraws===0 && !this.possibleSolution()){
    this.setState({doneStatus:'Game Over!'});
  }
}
possibleSolution(){
  var numberOfStars=this.state.numberOfStars,
  possibleNumbers=[],
  usedNumbers=this.state.usedNumbers;
  for (var i = 1; i <= 9; i++) {
    if (usedNumbers.indexOf(i) < 0) {
      possibleNumbers.push(i);
    }
  }
return this.possibleCombinationSum(possibleNumbers, numberOfStars);
}

possibleCombinationSum(arr, n){
  if (arr.indexOf(n)>=0) {
    return true;
  }
  if (arr[0] > 0) {
    return false;
  }
  if (arr[arr.length-1]>n) {
arr.pop();
    return this.possibleCombinationSum(arr, n);
  }
  var listSize=arr.length,combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount; i++) {
    var combinationSum=0;
    for (var j = 0; j < listSize; j++) {
    if(i&(1<<j)){
      combinationSum += arr[j];
    }
    if(n===combinationSum){return true;}
    }
  }
  return false;
}
render()
{
  console.log(this.state.redraws);
  var bottomFrame;
  if(this.state.doneStatus){
    bottomFrame=<DoneFrame doneStatus={this.state.doneStatus} resetGame={()=>this.resetGame()} />;
  }
  else{
    bottomFrame=<NumbersFrame selectedNumbers={this.state.selectedNumbers}
    selectNumber={(selectNumber)=>this.selectNumber(selectNumber)}
    usedNumbers={this.state.usedNumbers}/>;
  }
  return(
    <div id="game">

    <h3>Play Game</h3>
    <hr/>

    <div className="clearfix">
      <StartFrame  numberOfStars={this.state.numberOfStars}/>
      <ButtonFrame selectedNumbers={this.state.selectedNumbers}
       correct={this.state.correct}
       checkAnswer={()=>this.checkAnswer()}
        acceptAnswer={()=>this.acceptAnswer()}
         redraw={()=>this.redraw()}
         redraws={this.state.redraws}
       />
      <AnsFrame selectedNumbers={this.state.selectedNumbers} unselectNumber={this.unselectNumber.bind(this)}/>
    </div>

{
  bottomFrame
}
    </div>
  );
}

}
export default Game;
