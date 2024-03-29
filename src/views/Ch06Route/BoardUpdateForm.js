import { useState } from "react";
import { getBoard, updateBoard } from "./data";

function BoardUpdateForm(props) {
  const bno = parseInt(props.match.params.bno);
  const [board,setBoard]=useState(() => {return getBoard(bno);});

  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    updateBoard(board);
    props.history.goBack();
  };

  const handleCancel = (event) => {
    props.history.goBack()
  };

  return(
    <div className="card">
      <div className="card-header">
        Component: BoardUpdateForm
      </div>
      <div className="card-body">
        <form onSubmit={handleUpdate}>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-primary btn-sm mr-2" value="수정"/>
              <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default BoardUpdateForm;