import Square from "./Square"

export default function Modal ({winner, resetGame}) {
  if (winner === null) return null
  const text = winner === false ? 'Draw' : 'Winner:' 
  return (
    <section className="winner">
      <div className="text">
        <h2>{text}</h2>

        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Restart Game</button>
        </footer>
      </div>
    </section>
  )
}