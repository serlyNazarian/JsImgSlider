let next = document.getElementById("next");
let prev = document.getElementById("prev");
let items = document.querySelectorAll(".item-slider");
items[0].style.opacity = 1;
let x = 0;

next.onclick = function () {
  if (x < items.length - 1) {
    items[x].style.opacity = 0;
    x++;
    items[x].style.opacity = 1;
  } else {
    items[x].style.opacity = 0;
    x = 0;
    items[x].style.opacity = 1;
  }
};

prev.onclick = function () {
  if (x > 0) {
    items[x].style.opacity = 0;
    x--;
    items[x].style.opacity = 1;
  } else {
    items[x].style.opacity = 0;
    x = items.length - 1;
    items[x].style.opacity = 1;
  }
};

// users.forEach(function(item, index))
