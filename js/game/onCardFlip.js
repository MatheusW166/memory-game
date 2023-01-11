function onClickCard(e) {
  const target = e.currentTarget;
  target.querySelector(".card").classList.toggle("flipped");
}

function defineCardClick() {
  const cardContainerElements = document.querySelectorAll(".card-container");
  cardContainerElements.forEach((e) => (e.onclick = onClickCard));
}

export { defineCardClick };
