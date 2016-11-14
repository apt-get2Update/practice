import React, { Component } from 'react';
import Apicard from './Apicard';

class Apimain extends Component{

  constructor(props,context){
    super(props,context)
    this.state = {
      card:[]
    }
  }


change(){
let name=[this.refs.newName.value];
  this.setState({card:this.state.card.concat(name)})
}
render(){
  return(
  <div>
<input placeholder="username" ref="newName" />
<button onClick={this.change.bind(this)}>Add</button>
<hr/>
{
this.state.card.map((text,i)=>{
return(<Apicard name={text} key={i}/>);
})
  }
    </div>
  );
}

}
export default Apimain;
