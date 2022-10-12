// import style from "./style.module.scss";
// import classNames from "classnames/bind";
// import { useState } from "react";

// const cx = classNames.bind(style);

// function Exam02Saas(props) {
//   const [state] = useState({
//     userId: "user1"
//   });

//   return(
//     <div className="card">
//       <div className="card-header">
//       Exam02Saas
//       </div>
//       <div className="card-body">
//         <div className={style.wraaper}> Hello1</div>
//         <div className={style.wraaper+" "+style.inverted+ " mt-3"}> Hello2</div>
//         <div className={`${style.wraaper} ${style.inverted} mt-3`}> Hello3</div>
//         {state.userId?
//           <div className={classNames(style.wraaper,style.inverted,"mt-3")}> Hello4</div>
//           :
//           <div className={classNames(style.wraaper,"mt-3")}> Hello4</div>
//         }
//         <div className={classNames(style.wraaper,{[style.inverted]:state.userId !== null},"mt-3")}> Hello5</div>
//         <div className={cx('wraaper',{inverted:state.userId!==null},"mt-3")}> Hello6</div>
//       </div>
//     </div>
//   );
// }
// export default Exam02Saas;