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

window.addEventListener('load', function() {
  randomizeGridItems();
});


const btnA = document.getElementById('A');
const btnB = document.getElementById('B');
const btnC = document.getElementById('C');

btnA.addEventListener('click', function() {
  chooseBtn('A');
});

btnB.addEventListener('click', function() {
  chooseBtn('B');
});

btnC.addEventListener('click', function() {
  chooseBtn('C');
});
function reorderGridItems(newOrder) {
  var gridItems = document.getElementsByClassName('grid-item');
  var gridItemsArray = Array.from(gridItems);
  var container = document.querySelector('.container');
  container.innerHTML = '';
  newOrder.forEach(function(index) {
    container.appendChild(gridItemsArray[index - 1]);
  });
}


function chooseBtn(btn) {
  if (btn === 'A') {
    reorderGridItems([2, 5, 8, 11, 14, 17, 20, 1, 4, 7, 10, 13, 16, 19, 3, 6, 9, 12, 15, 18, 21]);
  } else if (btn === 'B') {
    reorderGridItems([3, 6, 9, 12, 15, 18, 21, 2, 5, 8, 11, 14, 17, 20, 1, 4, 7, 10, 13, 16, 19]);
  } else {
    reorderGridItems([1, 4, 7, 10, 13, 16, 19, 3, 6, 9, 12, 15, 18, 21, 2, 5, 8, 11, 14, 17, 20]);
  }
}

window.addEventListener('load', function() {
  chooseBtn();
});