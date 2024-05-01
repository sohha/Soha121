import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="right-border bottom-border"
      ></Tile>
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="right-border bottom-border"
      ></Tile>
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className="right-border bottom-border"
      ></Tile>
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="right-border bottom-border"
      ></Tile>
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="bottom-border"
      ></Tile>
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="right-border bottom-border"
      ></Tile>
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="right-border bottom-border"
      ></Tile>
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="right-border bottom-border"
      ></Tile>
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tiles[8]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(9)}
        value={tiles[9]}
        className="bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(10)}
        value={tiles[10]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(11)}
        value={tiles[11]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(12)}
        value={tiles[12]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(13)}
        value={tiles[13]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(14)}
        value={tiles[14]}
        className="bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(15)}
        value={tiles[15]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(16)}
        value={tiles[16]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(17)}
        value={tiles[17]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(18)}
        value={tiles[18]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(19)}
        value={tiles[19]}
        className="bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(20)}
        value={tiles[20]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(21)}
        value={tiles[21]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(22)}
        value={tiles[22]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(23)}
        value={tiles[23]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(24)}
        value={tiles[24]}
        className=""
      />
      <Strike strikeClass={strikeClass}></Strike>
    </div>
  );
}

export default Board;
