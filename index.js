
function randomizeGridItems() {
  var gridItems = document.getElementsByClassName('grid-item');
  var gridItemsArray = Array.from(gridItems);
  gridItemsArray.sort(function() {
    return 0.5 - Math.random();
  });
  var container = document.querySelector('.container');
  container.innerHTML = '';
  gridItemsArray.forEach(function(item) {
    container.appendChild(item);
  });
}
window.addEventListener('load', randomizeGridItems);


  



