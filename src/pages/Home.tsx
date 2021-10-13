import { css } from "@emotion/css";
import { addListener } from "process";
import { useState } from "react";
import { Square } from "../components/Square";

export const Home = () => {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player1, setPlayer1] = useState(true);

    const gameCheck = () => {
        // ckeck logic
        console.log("game checking");
        // 1, 2, 3
        if (board[0] === board[1] && board[1] === board[2]){
            alert("Game Over");
        };
    }

    const squareClicked = (position: number) => {
        if(board[position] !== ""){
            alert("this square alr")
            return;
        }
        if (player1) {
            board[position] = "X";
        } else {
            board[position] = "O";
        }
        
        setBoard([...board]);
        setPlayer1(!player1);
        gameCheck();
    };
    return (
        <div className={css({ display: "flex", justifyContent: "center" })}>
            <div>PLAYER: {player1 ? "1" : "2"}</div>
            <div>
                <Square position={0} value={board[0]} onUserClick={squareClicked} />
                <Square position={1} value={board[1]} onUserClick={squareClicked} />
                <Square position={2} value={board[2]} onUserClick={squareClicked} />
            </div>
            <div>
                <Square position={3} value={board[3]} onUserClick={squareClicked} />
                <Square position={4} value={board[4]} onUserClick={squareClicked} />
                <Square position={5} value={board[5]} onUserClick={squareClicked} />
            </div>
            <div>
                <Square position={6} value={board[6]} onUserClick={squareClicked} />
                <Square position={7} value={board[7]} onUserClick={squareClicked} />
                <Square position={8} value={board[8]} onUserClick={squareClicked} />
            </div>
        </div>
    );
};
