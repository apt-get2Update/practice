import React from 'react';
import './test.css';
import './casa.css';

class Tap extends React.Component{
constructor(props){
  super(props)
  this.state={
clicked:0 
  
  }
}
handleClick(e){

this.setState({clicked:e});
//
}

render(){
var tab=[],
barWidth=25*this.props.numOfTap,
tabWidth=100/this.props.numOfTap,
styl1={width:tabWidth+"%"},
styl2={width:barWidth+"%"};

for (var i = 0; i < this.props.numOfTap ; i++) {
	if(this.state.clicked===i){
tab[i]=(<div className="section " onClick={this.handleClick.bind(this,i)} style={styl1}>
<div className="logo">
<img src="" />
</div>
<div className="message highlight">
{this.props.title[i]}
</div>
<hr className="line"/>
</div>);
}else{
	tab[i]=(<div className="section" onClick={this.handleClick.bind(this,i)} style={styl1}>
<div className="logo">
<img src="" />
</div>
<div className="message">
{this.props.title[i]}

</div>
<hr className="lineHide"/>
</div>);

}

}

  return(

<div className="tab" style={styl2}>
{
	tab
}

</div>
  );
}

}
export default Tap;
