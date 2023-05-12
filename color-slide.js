function color () {
  const red = document.getElementById("red").value
  const green = document.getElementById("green").value
  const blue = document.getElementById("blue").value

  document.body.style.backgroundColor = 'rgb(' + red + ", " + green + ", " + blue + ")" 

  document.getElementById('output').innerHTML = 'rgb(' + red + ", " + green + ", " + blue + ")" 
}

