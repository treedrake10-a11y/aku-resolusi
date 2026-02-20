
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchProduk");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();

        cards.forEach(card => {
            const namaProduk = card.querySelector("h4").textContent.toLowerCase();

            if (namaProduk.includes(keyword)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

});

