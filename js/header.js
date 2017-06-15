
'use-strict';

// $('#menu-toggle').click(function(){
//   $(this).toggleClass('open');
// })

var menuButton = document.querySelector('.buttonMenu');

function toggleVisibility() {
  var menu = document.querySelector(".buttonContainerMenu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

menuButton.addEventListener('click', toggleVisibility);
