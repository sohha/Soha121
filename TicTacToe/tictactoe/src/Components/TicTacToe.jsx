import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import gameOverSoundAsset from "../sounds/game-over.wav";
import clickSoundAsset from "../sounds/click.wav";

const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 0.2;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.5;

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  //Rows
  { combo: [0, 1, 2, 3, 4], strikeClass: "strike-row-1" },
  { combo: [5, 6, 7, 8, 9], strikeClass: "strike-row-2" },
  { combo: [10, 11, 12, 13, 14], strikeClass: "strike-row-3" },
  { combo: [15, 16, 17, 18, 19], strikeClass: "strike-row-4" },
  { combo: [20, 21, 22, 23, 24], strikeClass: "strike-row-5" },

  //Columns
  { combo: [0, 5, 10, 15, 20], strikeClass: "strike-column-1" },
  { combo: [1, 6, 11, 16, 21], strikeClass: "strike-column-2" },
  { combo: [2, 7, 12, 17, 22], strikeClass: "strike-column-3" },
  { combo: [3, 8, 13, 18, 23], strikeClass: "strike-column-4" },
  { combo: [4, 9, 14, 19, 24], strikeClass: "strike-column-5" },

  //Diagonals
  { combo: [0, 6, 12, 18, 24], strikeClass: "strike-diagonal-1" },
  { combo: [4, 8, 12, 16, 20], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass, setGameState) {
  for (const { combo, strikeClass } of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];
    const tileValue4 = tiles[combo[3]];
    const tileValue5 = tiles[combo[4]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3 &&
      tileValue1 === tileValue4 &&
      tileValue1 === tileValue5
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
}

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(25).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState("");
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[index] !== null) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(25).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      gameOverSound.play();
    }
  }, [gameState]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        tiles={tiles}
        playerTurn={playerTurn}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState}></GameOver>
      <Reset gameState={gameState} onReset={handleReset}></Reset>
      <h4>Made by Soha</h4>
    </div>
  );
}
export default TicTacToe;
