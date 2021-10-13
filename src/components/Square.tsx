import { css } from "@emotion/css";

interface SquareProps {
    position: number;
    value: string;
    onUserClick: (position: number) => void;
}

export const Square = ({ value, position, onUserClick }: SquareProps) => {
    const userClick = () => {
        onUserClick(position);
    };

    return (
        <div
            className={css({
                width: 30,
                height: 30,
                border: "1px solid #000",
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
