// Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.right === "0px") {
        menu.style.right = "-250px";
    } else {
        menu.style.right = "0px";
    }
}

// Image Drop and Joggle Animation
document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".drop-image");

    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
            img.style.transition = "transform 1s ease, opacity 1s ease";
            img.style.transform = "translateY(50px)";

            setTimeout(() => {
                setInterval(() => {
                    img.style.transform = "translateY(55px)";
                    setTimeout(() => {
                        img.style.transform = "translateY(50px)";
                    }, 300);
                }, 600);
            }, 6000); // Joggle starts after 6 seconds

        }, index * 6000); // Each image drops after 6 seconds
    });
});