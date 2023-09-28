const img1 = document.querySelector("#image-11");
const img2 = document.querySelector("#image-2");
const img3 = document.querySelector("#image-3");
const img4 = document.querySelector("#image-4");
const img5 = document.querySelector("#image-5");
const btn = document.querySelector(".points");

btn.addEventListener("click", changeImage);

let count = 0;
let pictures = [img1, img2, img3, img4, img5];

function changeImage(h) {
  if (count < pictures.length - 1) {
    count++;
  } else {
    count = 0;
  }
  console.log(pictures[1]);
}
