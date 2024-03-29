import { Link } from "react-router-dom";
import qs from "qs";
import { useEffect, useState } from "react";
import { getBoardList } from "apis/boards";
function BoardTable(props) {
  const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
  const pageNo = parseInt(queryString.pageNo) || 1;
  const [page,setPage] = useState(null);

  const changePageNo = async (pageNo) => {
    try{
      const response = await getBoardList(pageNo);
      // const pageArray = [];
      // const startPageNo = response.data.pager.startPageNo;
      // const endPageNo = response.data.pager.endPageNo;
      // for(let i=startPageNo;i<=endPageNo;i++){
      //   pageArray.push(i);
      // }

      setPage(response.data);
    } catch(error){
      throw error;
    }
  };

  useEffect(() => {
    changePageNo(pageNo);
    console.log("유스이펙트 실행");
  }, [pageNo]);

  console.log("상태 ㅁㅁㅁ",page);
  return(
    <div className="card">
      <div className="card-header">
        BoardTable
      </div>
      <div className="card-body">
      {console.log("화면 실행 리턴ㅇㅁㅁㅁ")}

        {page!=null &&
          <div>
            <div className="mb-3">
              <Link to="/ch09/exam03/writeForm" className="btn btn-success btn-sm">생성</Link>
            </div>
            <div>{page.boards[0].bno}</div>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>글쓴이</th>
                  <th>날짜</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                
                {page.boards.map(board => {
                  return (
                    <tr key={board.bno}>
                      <td>{board.bno}</td>
                      <td><Link to={`/ch09/exam03/${board.bno}/read?pageNo=${page.pager.pageNo}`}>{board.btitle}</Link></td>
                      <td>{board.bwriter}</td>
                      <td>{new Date(board.bdate).toLocaleDateString()}</td>
                      <td>{board.bhitcount}</td>
                    </tr>
                  );
                })}

                <tr>
                  <td colSpan="5" style={{textAlign: "center"}}>
                    <button className="btn btn-outline-primary btn-sm mr-1" onClick={() => changePageNo(1)}>처음</button> 
                    {(page.pager.groupNo > 1) && 
                      <button   className="btn btn-outline-info btn-sm mr-1" onClick={()=> changePageNo(page.pager.startPageNo-1)}>이전</button>
                    }
                    {page.pager.pageArray.map(i =>
                      <button className={`btn ${i===page.pager.pageNo?"btn-danger":"btn-outline-success"} btn-sm mr-1`} key={i} onClick={() => changePageNo(i)}>{i}</button>
                    )}
                    {page.pager.groupNo < page.pager.totalGroupNo && 
                      <button   className="btn btn-outline-info btn-sm mr-1" onClick={()=> changePageNo(page.pager.endPageNo+1)}>다음</button>
                    }
                    <button className="btn btn-outline-primary btn-sm" onClick={() => changePageNo(page.pager.totalPageNo)}>맨끝</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  );
}
export default BoardTable;