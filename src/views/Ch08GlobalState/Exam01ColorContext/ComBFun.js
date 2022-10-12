import { useContext } from "react";
import ColorContext from "./ColorContext";

function ComBFun(props) {
  const colorContext = useContext(ColorContext);
  const handleChange = (event) => {
    colorContext.setColor("green");
  }
  return(
    <div className="card">
        <div className="card-header">
          ComBFun
        </div>
        <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색깔 변경</button>
        <div className="card-body">    
          <div style={{backgroundColor:colorContext.color}}>
            흠
          </div>
          
        </div>
      </div>
  );
}
export default ComBFun;