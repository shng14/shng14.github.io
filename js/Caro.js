function Square(props) {
    console.log(props);
    return (
        React.createElement("button", { className: "square", onClick: props.onClick },
            props.value));
}
class Board extends React.Component {
    renderSquare(i) {
        return (
            React.createElement(Square, {
                value: this.props.squares[i],
                onClick: () => this.props.onClick(i)
            }));
    }
    render() {
        return (
            React.createElement("div", null,
                React.createElement("div", { className: "board-row" },
                    this.renderSquare(0),
                    this.renderSquare(1),
                    this.renderSquare(2),
                    this.renderSquare(3),
                    this.renderSquare(4),
                    this.renderSquare(5)),

                React.createElement("div", { className: "board-row" },
                    this.renderSquare(6),
                    this.renderSquare(7),
                    this.renderSquare(8),
                    this.renderSquare(9),
                    this.renderSquare(10),
                    this.renderSquare(11)),

                React.createElement("div", { className: "board-row" },
                    this.renderSquare(12),
                    this.renderSquare(13),
                    this.renderSquare(14),
                    this.renderSquare(15),
                    this.renderSquare(16),
                    this.renderSquare(17)),

                React.createElement("div", { className: "board-row" },
                    this.renderSquare(18),
                    this.renderSquare(19),
                    this.renderSquare(20),
                    this.renderSquare(21),
                    this.renderSquare(22),
                    this.renderSquare(23)),

                React.createElement("div", { className: "board-row" },
                    this.renderSquare(24),
                    this.renderSquare(25),
                    this.renderSquare(26),
                    this.renderSquare(27),
                    this.renderSquare(28),
                    this.renderSquare(29)),

                React.createElement("div", { className: "board-row" },
                    this.renderSquare(30),
                    this.renderSquare(31),
                    this.renderSquare(32),
                    this.renderSquare(33),
                    this.renderSquare(34),
                    this.renderSquare(35))));
    }
}
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(36).fill(null)
                }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        });
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                React.createElement("li", { key: move },
                    React.createElement("button", { onClick: () => this.jumpTo(move) }, desc)));


        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            React.createElement("div", { className: "game" },
                React.createElement("div", { className: "game-board" },
                    React.createElement(Board, {
                        squares: current.squares,
                        onClick: i => this.handleClick(i)
                    })),


                React.createElement("div", { className: "game-info" },
                    React.createElement("div", null, status),
                    React.createElement("ol", null, moves))));
    }
}

// ========================================

ReactDOM.render(React.createElement(Game, null), document.getElementById("root"));
function getTH(col, bn) {
    let itemArr = new Array(5);
    let lines_2 = [];
    let x = [];
    let y = 0;
    for (let j = 0; j < col; j++) {
        for (let k = 0; k < 2; k++) {
            let y2 = y;
            for (let i = 0; i < col - 1; i++) {
                itemArr[i] = y2;
                x[i] = itemArr[i];
                y2 = y2 + bn;
            }
            y = y + bn;
            lines_2.push(x);
            x = new Array();
        }
        console.log(y);
        y = y + 4;
    }
    return lines_2;
}
function calculateWinner(squares) {

    console.log(getTH(6, 1));
    console.log(getTH(6, 6));

    const lines = [
        [0, 1, 2, 3, 4],
        [6, 7, 8, 9, 10],
        [12, 13, 14, 15, 16],
        [18, 19, 20, 21, 22],
        [24, 25, 26, 27, 28],

        [1, 2, 3, 4, 5],
        [7, 8, 9, 10, 11],
        [13, 14, 15, 16, 17],
        [19, 20, 21, 22, 23],
        [25, 26, 27, 28, 29],

        [6, 7, 8, 9, 10],
        [12, 13, 14, 15, 16],
        [18, 19, 20, 21, 22],
        [24, 25, 26, 27, 28],
        [30, 31, 32, 33, 34],

        [7, 8, 9, 10, 11],
        [13, 14, 15, 16, 17],
        [19, 20, 21, 22, 23],
        [25, 26, 27, 28, 29],
        [31, 32, 33, 34, 35],

        [0, 7, 14, 21, 28],
        [6, 13, 20, 27, 34],
        [4, 9, 14, 19, 24],
        [10, 15, 20, 25, 30],

        [1, 8, 15, 22, 29],
        [7, 14, 21, 28, 35],
        [5, 10, 15, 20, 25],
        [11, 16, 21, 26, 31],

        [0, 6, 12, 18, 24],
        [1, 7, 13, 19, 25],
        [2, 8, 14, 20, 26],
        [3, 9, 15, 21, 27],
        [4, 10, 16, 22, 28],

        [1, 7, 13, 19, 25],
        [2, 8, 14, 20, 26],
        [3, 9, 15, 21, 27],
        [4, 10, 16, 22, 28],
        [5, 11, 17, 23, 29],

        [6, 12, 18, 24, 30],
        [7, 13, 19, 25, 31],
        [8, 14, 20, 26, 32],
        [9, 15, 21, 27, 33],
        [10, 16, 22, 28, 34],

        [7, 13, 19, 25, 31],
        [8, 14, 20, 26, 32],
        [9, 15, 21, 27, 33],
        [10, 16, 22, 28, 34],
        [11, 17, 23, 29, 35]];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d, e] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
            return squares[a];
        }
    }
    return null;
}