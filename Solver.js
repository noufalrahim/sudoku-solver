function solver(matrix){
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j] == 0){
                for(let k=1; k<=9; k++){
                    if(isValid(matrix, i, j, k)){
                        matrix[i][j] = k;
                        if(solver(matrix) == true){
                            return true;
                        }
                        else{
                            matrix[i][j] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(matrix, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (matrix[row][i] === num) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        if (matrix[i][col] === num) {
            return false;
        }
    }

    const subgridRowStart = Math.floor(row / 3) * 3;
    const subgridColStart = Math.floor(col / 3) * 3;
    for (let i = subgridRowStart; i < subgridRowStart + 3; i++) {
        for (let j = subgridColStart; j < subgridColStart + 3; j++) {
            if (matrix[i][j] === num) {
                return false;
            }
        }
    }

    return true;
}

export default solver;


