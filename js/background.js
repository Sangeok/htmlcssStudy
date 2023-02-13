const images = [
    "배경1.jpg",
    "배경2.jpg",
    "배경3.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const backgroundImage = document.querySelector(".backgroundImage > img");

backgroundImage.src = `img/${chosenImage}`;