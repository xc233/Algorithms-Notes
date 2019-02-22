let target = 5;
let matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
function Find(target , matrix) {
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0)
        return false;
    let cols = matrix.length - 1;
    for(i = 0, j = cols; i >=0 && j <=cols ; ){
        if (target == matrix[i][j]){
            console.log("Find");
            return true;
        }else if(target < matrix[i][j]){
            console.log("Delete Right colums");
            j--;
            continue;
        }else if(target > matrix[i][j]){
            console.log("Delete left rows");
            i++;
            continue;
        }
    }
    console.log("no find");
    return false;
}
Find (target,matrix);