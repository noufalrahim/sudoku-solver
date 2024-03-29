import express from "express";
import cors from "cors";
import solver from "./Solver.js";


const app = express();
app.use(cors());

const PORT = 5500;

app.get("/sudoku/solver/exampleresponse", (req, res) => {
    const matrix = [
        [8, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 6, 0, 0, 0, 0, 0],
        [0, 7, 0, 0, 9, 0, 2, 0, 0],
        [0, 5, 0, 0, 0, 7, 0, 0, 0],
        [0, 0, 0, 0, 4, 5, 7, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 3, 0],
        [0, 0, 1, 0, 0, 0, 0, 6, 8],
        [0, 0, 8, 5, 0, 0, 0, 1, 0],
        [0, 9, 0, 0, 0, 0, 4, 0, 0]
    ]

    const result = solver(matrix);
    console.log(matrix);
    res.send({
        solved: result,
        board: matrix
    });
});

app.post("/sudoku/solver", (req, res) => {
    
    const matrix = req.body.board;
    const resultStatus = solver(matrix);
    console.log(matrix);
    res.send({
        solved: resultStatus,
        board: matrix
    });
});

app.listen(`${PORT}`, () => {
    console.log(`Server is running on port ${PORT}`);
});