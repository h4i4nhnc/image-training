import { css } from "@emotion/css";
interface SquareProps {
    posistion: number;
    value: string;
    onUserClick: (position: number) => void;
}

export const Square = ({ value, posistion, onUserClick }: SquareProps) => {
    const userClick = () => {
        onUserClick(posistion);
    };

    return (
        <div
            className={css({
                width: 30,
                height: 30,
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            })}
            onClick={userClick}
        >
            {value}
        </div>
    );
};
