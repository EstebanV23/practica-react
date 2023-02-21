import { useState } from 'react'
import confetti from 'canvas-confetti'

import Square from './components/Square'
import Modal from './components/Modal'

import { TURNS } from './constans'
import { checkEndGame, checkWinner } from './logic/board'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null No winner, false Draw
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')
  }

  const updateBoard = (index) => {
    // Si ya tiene algo o si hay ya un ganador
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn // x or o
    setBoard(newBoard)
    // Cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardar con localStorage el estado de la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti() // Actualiza el estado y es asincrono
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Actualiza a empate
    }
  }

  return (
    <>
      <main className='board'>
        <h1>Tic tac toe</h1>
        <button onClick={resetGame}>Restart Game</button>
        <section className="game">
          {
            board.map((_, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        <Modal winner={winner} resetGame={resetGame}/>
      </main>
    </>
  )
}

export default App
