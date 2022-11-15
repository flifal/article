document.querySelectorAll(".share-icon")[1].onclick = function () {
  document.getElementById("share").classList.toggle("active");
};
document
  .querySelectorAll(".share-icon")[0]
  .addEventListener("click", function () {
    document.getElementById("share").classList.toggle("active");
    document.querySelectorAll(".share-icon")[0].classList.toggle("color");
  });
