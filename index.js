var sudoku=[];
function isValid( board,  row,  col,  c) {
  for (var i = 0; i < 9; i++) {
    if (board[i][col] == c)
      return false;

    if (board[row][i] == c)
      return false;


  }
   row=Math.floor(row/3);


   col=Math.floor(col/3);
  for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
         if( board[3*row+i][3*col+j]==c){
             return false;
         }
      }
  }
  return true;
}

function solveSudoku(board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] == 0) {
        for (var c =1; c <= 9; c++) {
          if (isValid(board, i, j, c)) {
            board[i][j] = c;
            if (solveSudoku(board))
                return true;
            board[i][j] = 0;
          }
        }

        return false;
      }
    }
  }
  sudoku=board;
  return true;
}

function row_valid(board){
  for(var i=0;i<9;i++){
    var a=[0,0,0,0,0,0,0,0,0,0,0];
    for(var j=0;j<9;j++){
      a[board[i][j]]++;
      if(a[board[i][j]]>1 && board[i][j]!=false)
          return false;
    }
  }
  return true;
}
function column_valid(board){
  for(var j=0;j<9;j++){
    var a=[0,0,0,0,0,0,0,0,0,0,0];
    for(var i=0;i<9;i++){
      a[board[i][j]]++;
      if(a[board[i][j]]>1 && board[i][j]!=0)
          return false;
    }
  }
  return true;
}

function validity(board){

  var row_validity=row_valid(board);
  var column_validity=column_valid(board);

  return row_validity && column_validity;

}



function solve(boardString) {
  var boardArray = boardString.split("");
  var m=9;var n=9;
  var k=0;
  for(var i=0;i<9;i++){
    var a=[]
    for(var j=0;j<9;j++){
      if(boardArray[k]!='-'){
        a.push( Number(boardArray[k]));
        k++;
      }
      else{
        a.push(0);
        k++;
      }
    }
    sudoku.push(a);
  }
  if(validity(sudoku)){
    solveSudoku(sudoku);
    console.log(sudoku);
    var ans="";
    for(var i=0;i<9;i++){
      for(var j=0;j<9;j++){
        var b=sudoku[i][j];
        ans+=""+sudoku[i][j] ;
      }
    }
    console.log(ans);
    sudoku=[];
    return ans;
  }
  else{
    sudoku=[];
    return "";
  }
}
