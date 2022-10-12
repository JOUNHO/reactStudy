import React from "react";

class ClassType extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      startNum:0,
      number:0
    }
    console.log("constructor() 실행");
    this.handleIncrement=this.handleIncrement.bind(this);
  }

  handleIncrement(event) {
    this.setState({
      ...this.state,
      number:this.state.number+1
    })
  }

  static getDerivedStateFromProps(props, prevState) { //prop이 바뀌면 실행
    console.log("getDerivedStateFromProps() 실행");
    //props가 갱신될 때 상태값도 같이 갱신되도록 새로운 상태 리턴
    if(prevState.startNum !== props.startNum){
      return {
        startNum:props.startNum,
        number:props.startNum
      } //새로운 상태로 됨
    } else {
      return null;
    }
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.group("shouldComponentUpdate() 실행");
    console.log("nextProps:",nextProps);
    console.log("nextState:",nextState);
    console.groupEnd();
    if(nextState.number%2 ===0){
      return true;
    } else {
      return false;
    }
  }
  
  
  render() {
    console.log("render() 실행");
    return (
      <div className="card">
        <div className="card-header">
         ClassType
        </div>
        <div className="card-body">
          <div>number: {this.state.number}</div>
          <button className="btn btn-info btn-sm mt-2" onClick={this.handleIncrement}>증가</button>
        </div>
      </div>
    );
  };


  componentDidUpdate() {
    console.log("componentDidUpdate() 실행");
  }

  componentDidMount() {
    console.log("componentDidMount() 실행");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() 실행");
  }
}
export default ClassType;