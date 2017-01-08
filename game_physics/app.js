window.onload = function(){

  console.log("hello from app.js!");
  // browser window width and height
  var w = window.innerWidth
  var h = window.innerHeight

  // Middle of x axis and y axis relative to browser width and height
  var middleXAxis = w / 2
  var middleYAxis = h / 2

  // Character movement velocities
  var charXVelocity = 1
  var charYVelocity = 1

  // set initial position of charBox to center of screen, accounting for width of charBox
  var charBox = document.querySelector('.charBox')
  charBox.style.left = middleXAxis - (charBox.clientWidth / 2) + 'px'
  charBox.style.bottom = '20px'

  // game loop version 0.1
  for (var i = 0; i < 100; i++) {

    // get current char position
    var xPos = charBox.style.left
    var yPos = charBox.style.bottom

    // get new position for x and y positions based on velocity
    var xAxisMovement = parseInt(xPos) + charXVelocity
    var yAxisMovement = parseInt(yPos) + charYVelocity

    // reposition charBox based on newly calculated position
    charBox.style.left = xAxisMovement + 'px'
    charBox.style.bottom = yAxisMovement + 'px'
  }

}
