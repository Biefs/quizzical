function suffleArray(array){
  for (let i = array.length - 1; i > 0; i--) {
     const r = Math.floor(Math.random() * (i + 1))
     const temp = array[i]
     array[i] = array[r]
     array[r] = temp
  }
  return array
}


export default suffleArray