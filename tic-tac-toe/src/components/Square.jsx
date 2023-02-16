const Square = ({ children, isSelected, updateBoard, index }) => {
  const classNameSelected = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={classNameSelected}>
      {children}
    </div>
  )
} 

export default Square