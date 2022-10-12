import React from "react";

function getRandomColor() {
  return "#"+Math.floor(Math.random()*parseInt("ffffff",16)).toString(16);
}

class ComAClass extends React.Component {
  
  constructor(props){
    
    super(props);
    this.state={
      number: 0,
      color: "red"
    };
    this.addNumber=this.addNumber.bind(this);
  }

  addNumber(event) {
    this.setState({
      ...this.state,
      number: this.state.number+1
    }, () => {
      console.log("이후",this.state.number);
    });
    console.log("이전",this.state.number);
  }

  changeColor= (evnet) => {
    this.setState({
      ...this.state,
      color:getRandomColor()
    })
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          ComAClass
        </div>
        <div className="card-body">
          <h3 style={{color:this.state.color}}>{this.state.number}</h3>
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber}>숫자 증가</button>
          <button className="btn btn-danger btn-sm" onClick={this.changeColor}>색깔 변경</button>
        </div>
      </div>
    );
  }
}

export default ComAClass;