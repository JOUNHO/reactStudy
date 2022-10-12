import ClassTypeProps from "./ClassTypeProps";
import FunTypeProps from "./FunTypeProps";


function Exam01Props(props) {
  return(
    <div className="card">
      <div className="card-header">
        Exam01Props
      </div>
      <div className="card-body">
        <ClassTypeProps name="홍길동"
                        version={18}>
          <div>자식 내용입니다zz.</div>
        </ClassTypeProps>
        <div className="mt-3"></div>
        <FunTypeProps  version={18}>
          <div>자식 내용입니다.</div>
        </FunTypeProps>
      </div>
    </div>
  );
}

export default Exam01Props;