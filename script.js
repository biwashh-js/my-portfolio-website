document.addEventListener("DOMContentLoaded", () => {
    const dropdownIcon = document.querySelector(".dropdown-icon");
    const contacts = document.querySelector(".contacts");
    const line = document.querySelector(".line");
    const right = document.querySelector(".right-contents");

    dropdownIcon.addEventListener("click", () => {
        contacts.style.display = contacts.style.display === "flex" ? "none" : "flex";
        line.style.display = line.style.display === "flex" ? "none" : "flex";
         
    
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        {
            threshold: 0.1, 
        }
    );

    cards.forEach((card) => observer.observe(card));
});


document.addEventListener("DOMContentLoaded", () => {
    const animatedItems = document.querySelectorAll(".animated");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        {
            threshold: 0.1, 
        }
    );

    animatedItems.forEach((item) => observer.observe(item));
});
