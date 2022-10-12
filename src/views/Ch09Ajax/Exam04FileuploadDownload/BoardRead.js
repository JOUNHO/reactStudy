import { deleteBoard, downloadAttach, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function BoardRead(props) {
  const bno = parseInt(props.match.params.bno);
  const queryString = qs.parse(props.location.search,{ignoreQueryPrefix:true});
  const pageNo = parseInt(queryString.pageNo);
 

  const [board,setBoard] = useState({});

  useEffect(() => {
    console.log("??");
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
  //방법 1
  const [imgSrc, setImgSrc] = useState(null);
  //방법1-1
  const imgTag = useRef();

  useEffect(() => {
    console.log("시해");
    if(board.battachoname) {
      const work = async () => {
        try{
          const response = await downloadAttach(board.bno);
          console.log(response);
          setImgSrc(URL.createObjectURL(response.data));
          // imgTag.current.src = URL.createObjectURL(response.data);
        } catch(error){
          throw error;
        }
      };
      work();
    }
  },[board])
  //방법 2
  const authtoken = useSelector(state => state.authReducer.authToken);
  return(
    <div className="card">
      <div className="card-header">
        BoardRead
      </div>
      <div className="card-body">
        {board &&
        <>
            <div className="row">
              <div className="col-md-6">
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

              <div className="col-md-6">
                {board.battachoname &&
                  <div>
                    {/* 방법1 */}
                    {/* <img src={imgSrc} alt="" width="200" ref={imgTag}/> */}
                    {/* 방법2 */}
                    <img src={`http://localhost:8080/boards/battach/${board.bno}?authToken=${authtoken}`} alt="" width="200"/>
                  </div>
                }
              </div>
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