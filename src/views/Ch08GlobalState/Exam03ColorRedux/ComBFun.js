import { useDispatch,useSelector,useStore } from "react-redux";
import { createSetColorAction } from "redux/colorReducer";
function ComBFun(props) {
  const color = useSelector((state) => {
    return state.colorReducer.color
  });
  const dispatch = useDispatch();
  const store = useStore();
  console.log("스토어:",store);
  const handleChange = (event) => {
    dispatch(createSetColorAction("green"));
  };

  return(
    <div className="card">
      <div className="card-header">
        ComBFun
      </div>
      <div className="card-body">
      <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색깔 변경</button>
          <div style={{backgroundColor:color}}>
            흠
          </div>
      </div>
    </div>
  );
}

export default ComBFun;