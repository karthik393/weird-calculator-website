
let display = document.querySelector(".cal-display");

document.querySelector(".first-set-btns").addEventListener("click", function() {
  console.log("buton pressed 1")
});

document.querySelector(".second-set-btns").addEventListener("click", function() {
  console.log("buton pressed 2");
  display.value = '7';
});

document.querySelector(".third-set-btns").addEventListener("click", function() {
  console.log("buton pressed 3");
  display.value = '4';
});

document.querySelector(".fourth-set-btns").addEventListener("click", function() {
  console.log("buton pressed 4");
  display.value = '1';
});