function generateRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var colorName = getColorName(red, green, blue);
  return {
    color: "rgb(" + red + "," + green + "," + blue + ")",
    name: colorName,
  };
}

function getColorName(red, green, blue) {
  if (red > green && red > blue) {
    return "Red";
  } else if (green > red && green > blue) {
    return "Green";
  } else if (blue > red && blue > green) {
    return "Blue";
  } else {
    return "Mixed";
  }
}

function generateRandomColors() {
  var colorBoxes = document.querySelectorAll(".box");

  colorBoxes.forEach(function (box) {
    var randomColor = generateRandomColor();
    box.style.backgroundColor = randomColor.color;
    box.textContent = randomColor.color;
  });
}


generateRandomColors();
