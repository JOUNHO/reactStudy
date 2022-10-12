//상태를 변경하는 함수
function reducer(prevState,action) {
  if(action.type ==="INCREMENT"){
    return {
      ...prevState, //number말고도 또 있으면
      number:prevState.number+1
    };
  } else if(action.type ==="DECREMENT"){
    return {
      ...prevState, //number말고도 또 있으면
      number:prevState.number-1
    };
  } else{
    return null;
  }
  
}

export default reducer;