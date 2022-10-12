import React from "react";
import PropTypes from "prop-types";

class ClassTypeProps extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(props.match);
  }

  render() {
    //const {name,version,children} = this.props;
    return (
      <div className="card">
        <div className="card-header">
          ClassTypeProps
        </div>
        <div className="card-body">
          <div>name: {this.props.name}</div>
          <div>version: {this.props.version}</div>
          {this.props.children}
          {/* {childern}  가능 */}
        </div>
      </div>
    );
  }
}


export default ClassTypeProps;