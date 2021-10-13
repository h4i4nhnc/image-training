import { css } from "@emotion/css";
import { useState } from "react";
import { Square } from "../components/Square";

export const Home = () => {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

    const [player1, setPlayer1] = useState(true);

    const gameCheck = () => {
        // check logic
        console.log("game checking");
        // 1, 2, 3
        if (board[0] === board[1] && board[1] === board[2]) {
            alert("END GAME");
        }
    };

    const squareClicked = (position: number) => {
        if (board[position] !== "") {
            alert("this square already setted!");
            return;
        }

        if (player1) {
            board[position] = "X";
        } else {
            // player 2
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
                <Square
                    posistion={0}
                    value={board[0]}
                    onUserClick={squareClicked}
                />
                <Square
                    posistion={1}
                    value={board[1]}
                    onUserClick={squareClicked}
                />
                <Square
                    posistion={2}
                    value={board[2]}
                    onUserClick={squareClicked}
                />
            </div>
            <div>
                <Square
                    posistion={3}
                    value={board[3]}
                    onUserClick={squareClicked}
                />
                <Square
                    posistion={4}
                    value={board[4]}
                    onUserClick={squareClicked}
                />
                <Square
                    posistion={5}
                    value={board[5]}
                    onUserClick={squareClicked}
                />
            </div>
            <div>
                <Square
                    posistion={6}
                    value={board[6]}
                    onUserClick={squareClicked}
                />
                <Square
                    posistion={7}
                    value={board[7]}
                    onUserClick={squareClicked}
                />
                <Square
                    posistion={8}
                    value={board[8]}
                    onUserClick={squareClicked}
                />
            </div>
        </div>
    );
};
