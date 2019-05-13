function updateDOM(array) {
  // Get block color from first 3 array elements
  const blockColor = `rgb(${array[0]}, ${array[1]}, ${array[2]})`

  // forEach over partial array, from index 1-15
  array.slice(1).forEach((number, index) => {
    const rowIdx = index % 5
    const colIdx = Math.floor(index/5)
    const cell = document.getElementById(`${rowIdx}-${colIdx}`)
    const mirrorCell = document.getElementById(`${rowIdx}-${4 - colIdx}`)

    // per element, check if even/odd
    if (number % 2 === 0) {
      // if even, turn on
      cell.style.backgroundColor = blockColor
      mirrorCell.style.backgroundColor = blockColor
    } else {
      // if odd, turn off
      cell.style.backgroundColor = 'rgb(240, 240, 240)'
      mirrorCell.style.backgroundColor = 'rgb(240, 240, 240)'
    }
  })
}
