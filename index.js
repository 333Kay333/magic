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

function reorderGridItems(order) {
  const container = document.querySelector('.container');
  const items = Array.from(container.getElementsByClassName('grid-item'));

  items.sort((a, b) => {
    const aId = parseInt(a.id.split('-')[1]);
    const bId = parseInt(b.id.split('-')[1]);
    return order.indexOf(aId) - order.indexOf(bId);
  });

  while (container.firstChild) {
    container.firstChild.remove();
  }

  items.forEach(item => {
    container.appendChild(item);
  });
}

function chooseCol(col) {
  switch (col) {
    case 'A':
      reorderGridItems([20, 17, 14, 11, 8, 5, 2, 19, 16, 13, 10, 7, 4, 1, 18, 15, 12, 9, 6, 3, 0]);
      break;
    case 'B':
      reorderGridItems([18, 15, 12, 9, 6, 3, 0, 20, 17, 14, 11, 8, 5, 2, 19, 16, 13, 10, 7, 4, 1]);
      break;
    case 'C':
      reorderGridItems([19, 16, 13, 10, 7, 4, 1, 18, 15, 12, 9, 6, 3, 0, 20, 17, 14, 11, 8, 5, 2]);
      break;
    default:
      break;
  }
}