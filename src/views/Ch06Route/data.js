let lastBno = 15;
let data = [];
for(var i=1; i<=lastBno; i++) {
  data.push(
    {
    bno:i, 
    btitle:"제목"+i, 
    bcontent:"내용"+i, 
    bwriter:"user1", 
    bdate:new Date().toLocaleDateString(), 
    bhitcount:0
  }
  );
}

export function getBoardList(pageNo) {
  data.sort((a, b) => b.bno-a.bno);  
  if(!pageNo) pageNo = 1;
  const start = (pageNo - 1) * 5;
  const end = pageNo * 5;
  var boardList = data.slice(start, end);
  return boardList;
};

export function insertBoard(board) {
  lastBno++;
  board.bno = lastBno;
  board.bdate = new Date().toLocaleDateString();
  board.bhitcount = 0; 
  data.push(board);
}

export function getBoard(bno) {
  let board = data.find(board => {return (board.bno === bno);});
  console.log("board1",board);
  board.bcontent=board.bcontent+"흠냐";
  board.bhitcount=board.bhitcount+1;
  console.log("board2",board);
  return board;
}

export function deleteBoard(bno) {
  const index = data.findIndex(board => board.bno === bno);
  data.splice(index, 1);
}

export function updateBoard(board) {
  const row = data.find(row => row.bno === board.bno);
  row.btitle = board.btitle;
  row.bcontent = board.bcontent;
}