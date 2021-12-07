function init(c) {
  const displayElement = document.querySelectorAll(c);
  displayElement &&
    displayElement.forEach((ele) => {
      ele.style.display = "none";
    });
}

const cls = [".js-dismissable-hero",'.extension']

for (var i = 0; i < cls.length; i++) {
  init(cls[i]);
}
