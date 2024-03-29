import { deleteBoard, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function BoardRead(props) {
  const bno = parseInt(props.match.params.bno);
  const queryString = qs.parse(props.location.search,{ignoreQueryPrefix:true});
  const pageNo = parseInt(queryString.pageNo);


  const [board,setBoard] = useState({});

  useEffect(() => {
    const work = async () => {
      try{
        const response = await readBoard(bno);
        setBoard(response.data);
      } catch(error){
        throw error;
      }
    };
    work();
  }, [bno]);

  // let board = {};
  // const work = async () => {
  //   console.log("1");
  //   board = await readBoard(bno);
  //   console.log("2");
  // };
  // work(); 
  // console.log("3");  XX
  const handleRemove = async(event) =>{
    try{
      await deleteBoard(bno);
      props.history.goBack();
    } catch(error){
      throw error;
    }
  };
  return(
    <div className="card">
      <div className="card-header">
        BoardRead
      </div>
      <div className="card-body">
        {board &&
          <>
            <div>
              <p>bno: {board.bno}</p>
              <p>btitle: {board.btitle}</p>
              <p>bcontent: {board.bcontent}</p>
              <p>bwriter: {board.bwriter}</p>
              <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
              <p>bhitcount: {board.bhitcount}</p>
              <p>battachoname: {board.battachoname}</p>
              <p>battachsname: {board.battachsname}</p>
              <p>battachtype: {board.battachtype}</p>
            </div>
            <div>
              <Link to={"/ch09/exam03?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
              <Link to={`/ch09/exam03/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
              <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
            </div>
          </>
        }
      </div>
    </div>
  );
}
export default BoardRead;