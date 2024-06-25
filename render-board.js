const globalBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

export function renderBoard(board = globalBoard) {
  const $board = document.getElementById('board')

  let i = 1
  for (const row of board) {
    for (const cell of row) {
      const $cell = document.createElement('div')
      $cell.textContent = cell
      $cell.dataset.cell = i
      i++
      $cell.classList.add('cell')
      $board.appendChild($cell)
    }
  }
}