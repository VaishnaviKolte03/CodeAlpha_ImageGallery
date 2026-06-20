const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let visibleImages = [];
let currentIndex = 0;

function updateVisibleImages() {
    visibleImages = [...document.querySelectorAll(".gallery-item")]
        .filter(item => item.style.display !== "none")
        .map(item => item.querySelector("img"));
}

function attachImageEvents() {

    document.querySelectorAll(".gallery-item img")
    .forEach(img => {

        img.addEventListener("click", () => {

            updateVisibleImages();

            currentIndex = visibleImages.indexOf(img);

            lightbox.style.display = "flex";

            showImage();
        });
    });
}

function showImage() {
    lightboxImg.src = visibleImages[currentIndex].src;
}

nextBtn.addEventListener("click", () => {

    currentIndex =
    (currentIndex + 1) % visibleImages.length;

    showImage();
});

prevBtn.addEventListener("click", () => {

    currentIndex =
    (currentIndex - 1 + visibleImages.length)
    % visibleImages.length;

    showImage();
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});

function filterImages(category){

    const items =
    document.querySelectorAll(".gallery-item");

    items.forEach(item => {

        if(category === "all"){

            item.style.display = "block";

        } else if(item.classList.contains(category)){

            item.style.display = "block";

        } else {

            item.style.display = "none";
        }
    });

    updateVisibleImages();
}

attachImageEvents();
updateVisibleImages();