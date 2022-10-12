import React from "react";
class Classtype extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Classtype
        </div>
        <div className="card-body">
          <div>click횟수:{this.state.count}</div>
        <button  className="btn btn-info" onClick={() => this.setState({...this.state,count:this.state.count+1})}> ClickFun </button>
        </div>
      </div>
    );
  }
  
  componentDidUpdate() {
    setTimeout(() => {
      console.log("click: ",this.state.count);
    },3000)
  }
  
}

export default Classtype;