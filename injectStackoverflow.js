function init() {
  const displayElement = document.querySelectorAll(".js-dismissable-hero");
  displayElement &&
    displayElement.forEach((ele) => {
      ele.style.display = "none";
    });
}

init();
