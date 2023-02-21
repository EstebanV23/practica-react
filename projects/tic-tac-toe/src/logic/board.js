import { WINNER_COMBOS } from '../constans'

const checkWinner = (boardToCheck) => {
  // Ver si esta en X o O y observar todas las opciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // Null si no hay ganador
  return null
}

const checkEndGame = (boardToCheck) => {
  return boardToCheck.every(cell => cell !== null)
}

export { checkWinner, checkEndGame }
