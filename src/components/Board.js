import React, {useState} from 'react';
import { calculateWinner } from "../calculateWinner";
import Square from './Square';

const Board = () => {

  // Boş board state'i
  const [square, setSqure] = useState(Array(9).fill(null));
  // Oyuncuyu state'i
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(square);

  // Board'daki her bir Square component'ını render eden fonksiyon
  const renderSquare = (i) => {
    return(
      <Square val={square[i]} winner={winner.winnerSquare.includes(i)} onClick={() => handleClick(i)} />
    );
  }

  // Board component'ındaki Square component'larını sıfırlayıp oyunu yeniden başlatan fonksiyon
  const resetGame = () => {
    const squares = Array(9).fill(null);
    setSqure(squares);
    setXisNext(xIsNext);
  }

  // Square component'ına tıklanınca çalışacak olan fonksiyon
  const handleClick = (i) => {
    const squares = [...square];

    // Tıklanan kare boşsa ve henüz bir kazanan yoksa 
    if(square[i] === null && !winner.winner){
      // Board state'inde tıklanan kutuya oyuncuyu yaz
      squares[i] = xIsNext ? 'X' : 'O';
      // Board state'ini güncelle
      setSqure(squares);
      // Oyuncuyu değiştir
      setXisNext(!xIsNext);
    } else{
      return;
    }
  }

  // Kazananın durumuna göre 'status' içeriğini belirle
  let status;
  if(winner.winner){
    status = `Winner: ${winner.winner}`;
  } else{
    status = `Player Turn: ${xIsNext ? 'X' : 'O'}`;
  }
  
  return(
    <div>
      <h2>{status}</h2>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {
        (winner.winner) && <button className="btn" onClick={() => resetGame()}>PLAY AGAIN</button>
      }
    </div>
    
    
  );
}

export default Board;