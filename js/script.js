var button = document.querySelector(".show-cat");
// console.log(button);
var cat = document.querySelector(".cat");
// console.log(cat);

//When user clicks on the button, function is triggered to shw cat image
button.addEventListener("click", function () {
  cat.classList.add("show");
});

// console.log(button)
