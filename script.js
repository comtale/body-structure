let head = document.querySelector(".main__element--two");
let bodyBoy = document.querySelector(".main__element--one");
let hand = document.querySelector(".main__element--three");
let lung = document.querySelector(".main___element--four");
let img = document.createElement("img");
let src = document.querySelector(".main__image");
head.addEventListener("click", function () {
    img.src = "images/IMG_9240.png";
    src.appendChild(img);
    document.querySelector(".main__popup").style.display = "flex";
})

hand.addEventListener("click", function () {
    img.src = "images/IMG_9241.png";
    src.appendChild(img);
    document.querySelector(".main__popup").style.display = "flex";
})

lung.addEventListener("click", function () {
    img.src = "images/IMG_9245.png";
    src.appendChild(img);
    document.querySelector(".main__popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".main__popup").style.display = "none";
    src.innerHTML = "";
})