import React, { Component } from 'react';
import $ from 'jquery';

class Apicard extends Component{

constructor(props,context){
  super(props,context)
  this.state = {
    data: {
    }
  }
}

componentDidMount(){
  let t = this;
  console.log(t);
  $.get("https://api.github.com/users/"+t.props.name,function(data){
t.setState({data: data})
  });

}
render()
{
  return(
    <div>
    <img src={this.state.data.avatar_url} alt="" width="90px" height="90px" float="left"/>
    <h3>{this.state.data.name}</h3>
    </div>
  );
}

}
export default Apicard;
