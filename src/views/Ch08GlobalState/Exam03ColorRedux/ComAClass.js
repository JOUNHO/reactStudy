import React from "react";
import { createSetColorAction } from "redux/colorReducer";
import {connect} from "react-redux";

class ComAClass extends React.Component{
  constructor(props) {
    super(props);
    this.state ={};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setColor("red");
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
        ComAClass
        </div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
            <div style={{backgroundColor:this.props.color}}>
              내용
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("애 어디서옴?",state);
  return {
    color:state.colorReducer.color
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setColor: (color) => dispatch(createSetColorAction(color))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ComAClass);  //ComAClass에 두가지 를 props로 넣어줌
//connect로 store와 ComAClass를 연결
//export로 먼저 mapStateToprops와 mapDispatchtoProps를 하는데, 그때 store의 속성 state와 dispatch로 보내짐 그래서 결국 ComAClass에 props로 전달