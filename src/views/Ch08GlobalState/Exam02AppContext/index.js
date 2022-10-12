import LoginFormFun from "../Exam04AuthRedux/LoginFormFun";
import LoginFormClass from "./LoginFormClass";

function Exam02AppContext(props) {
  return(
    <div className="card">
      <div className="card-header">
        Exam02AppContext
      </div>
      <div className="card-body">
        <LoginFormClass/>
        <LoginFormFun/>
      </div>
    </div>
  );
}
export default Exam02AppContext;