import React from "react";
import ColorContext from "./ColorContext";
import ComBFun from "./ComBFun";
class ComAClass extends React.Component{
  //정적 속성
  static contextType = ColorContext;
  //생성자
  constructor(props){
    super(props);
    
    this.state = {};
  }

  handleChange = (event) => {
   
    this.context.setColor("red");
  }
  //인스턴스 메소드
  render() {
    return (
      <div className="card">
        <div className="card-header">
          ComAClass
        </div>
        <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
        <div className="card-body">    
          <div style={{backgroundColor:this.context.color}}>
            흠
          </div>
          <ComBFun/>
        </div>
      </div>
    );
  }
}

export default ComAClass;