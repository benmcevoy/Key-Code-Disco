function bottomLeftFinaleView() {

  var seedBox = document.getElementById('bottomleft');
  var largestBox = seedBox;

  this.clearScreen = function() {
    seedBox.innerHTML = '';
  };

  this.addBox = function(box) {
    largestBox.appendChild(box);
    largestBox = box;
  };

}
