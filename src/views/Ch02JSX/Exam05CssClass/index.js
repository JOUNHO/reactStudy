import "./style.css"
//일반 자바스크립트 주석
/*
여러행 주석
*/

function Exam05CssClass(props) {
  const name="React";
  return(
    <div className="card">
      {/*  */}
      <div className="card-header" // 끝태그는 주석 포함x
      >
        
        Exam05CssClass
      </div>
      <div className="card-body">
        <div className="react">{name}</div>
      </div>
    </div>
  );
}
export default Exam05CssClass;