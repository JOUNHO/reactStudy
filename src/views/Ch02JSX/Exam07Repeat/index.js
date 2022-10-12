import ComB from "./ComB";
import ComA from "./ComA";
import ComC from "./ComC";

function Exam07Repeat(props) {
  return(
    <div className="card">
      <div className="card-header">
      Exam07Repeat
      </div>
      <div className="card-body">
        <ComA/>
        <div className="mt-2"></div>
        <ComB/>
        <div className="mt-2"></div>
        <ComC/>
      </div>
    </div>
  );
}
export default Exam07Repeat;