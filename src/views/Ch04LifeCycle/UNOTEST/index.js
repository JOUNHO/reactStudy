import Classtype from "./Classtype";
import FunType from "./FunType";

function UNOTEST(props) {

  return(
    <div className="card">
      <div className="card-header">
        UNOTEST
      </div>
      <div className="card-body">
        <Classtype/>
        <FunType/>
      </div>
    </div>
  );
}
export default UNOTEST;