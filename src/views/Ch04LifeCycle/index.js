import  { Switch,Route } from "react-router-dom";
import Exam01CallbackMethod from "./Exam01CallbackMethod";
import Exam02UseEffect from "./Exam02UseEffect";
import UNOTEST from "./UNOTEST";

function Ch04LifeCycle(props) {
  return(
    <div className="card">
      <div className="card-header">
        Ch04LifeCycle
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`} exact component={Exam01CallbackMethod}/>
          <Route path={`${props.match.url}/exam02`} exact component={Exam02UseEffect}/>
          <Route path={`${props.match.url}/exam03`} exact component={UNOTEST}/>
        </Switch>
      </div>
    </div>
  );
}
export default Ch04LifeCycle;