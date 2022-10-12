import { useState } from "react";
import ClassType from "./ClassType";

function Exam01WhenMount(props) {
  const [startNum,setStartNum] = useState(0);

  const handleChange = (event) => {
    setStartNum(parseInt(event.target.value));
  }

  return(
    <div className="card">
      <div className="card-header">
      Exam01WhenMount
      </div>
      <div className="card-body">
        <input type="number" name="startNum" value={startNum} onChange={handleChange}/>
        <ClassType startNum={startNum}/>
      </div>
    </div>
  );
}
export default Exam01WhenMount;