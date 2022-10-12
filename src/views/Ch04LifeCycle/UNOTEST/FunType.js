import { useEffect, useState } from "react";

function FunType(props) {
  const [count,setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log("click: ",count);
    },3000)
  },[count])


  return(
    <div className="card">
      <div className="card-header">
        FunType
      </div>
      <div className="card-body">
        <div>click횟수:{count}</div>
        <button className="btn btn-success" onClick={() => setCount(count+1)}> ClickFun </button>
      </div>
    </div>
  );
}
export default FunType;