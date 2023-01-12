const IMAGES = [
  "../../img/bobrossparrot.gif",
  "../../img/explodyparrot.gif",
  "../../img/fiestaparrot.gif",
  "../../img/metalparrot.gif",
  "../../img/revertitparrot.gif",
  "../../img/tripletsparrot.gif",
  "../../img/unicornparrot.gif",
];

const AVAILABLEIMAGES = [...IMAGES];

function resetImages() {
  AVAILABLEIMAGES.length = 0;
  IMAGES.forEach((img) => AVAILABLEIMAGES.push(img));
}

function getRandomImg() {
  const rand = Math.floor(Math.random() * AVAILABLEIMAGES.length + 1);
  const img = AVAILABLEIMAGES[rand - 1];
  AVAILABLEIMAGES.splice(rand - 1, 1);
  return img;
}

export { resetImages, getRandomImg };
