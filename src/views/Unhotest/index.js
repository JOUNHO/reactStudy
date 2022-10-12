import { useEffect } from "react";
import { useRef } from "react";
import { Route, Switch } from "react-router";
import addremoveclass from "./addremoveClass";

function Unhotest(props) {
  const data = `<p data-ke-size="size16">자율 재택근무 관련 공지</p>
  <p data-ke-size="size16"><span style="color: #ee2323;">작성일 :&nbsp;2021-06-26</span></p>
  <p data-ke-size="size16"><span style="color: #ee2323;">자율재택 근무관련을 공지합니다</span><br /><span style="color: #ee2323;">내용은 뭐뭐입니다.</span></p>`
  const divRef = useRef();

  useEffect(() => {
    divRef.current.innerHTML = data;
  },[]);

  return(
    <div className="card">
      <div className="card-header">
        Unhotest
      </div>
      <div className="card-body">
        <div className="mt-2" ref={divRef}></div>
      </div>
    </div>
  );
}
export default Unhotest;