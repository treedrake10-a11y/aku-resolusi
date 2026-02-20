const modal = document.getElementById("modalProduk");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("formProduk");
const grid = document.querySelector(".produk-grid");

openBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

form.onsubmit = (e) => {
    e.preventDefault();

    const nama = document.getElementById("namaProduk").value;
    const harga = document.getElementById("hargaProduk").value;
    const stok = document.getElementById("stokProduk").value;
    const gambar = document.getElementById("gambarProduk").value || "../assets/img/default.png";

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${gambar}">
        <h4>${nama}</h4>
        <p class="harga">Rp ${parseInt(harga).toLocaleString()}</p>
        <small>Stok: ${stok}</small>
    `;

    grid.appendChild(card);

    form.reset();
    modal.style.display = "none";
};




const form = document.getElementById("formProduk");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const product = {
            nama: document.getElementById("namaProduk").value,
            harga: parseInt(document.getElementById("hargaProduk").value),
            stok: parseInt(document.getElementById("stokProduk").value),
            gambar: document.getElementById("gambarProduk").value || "../assets/img/default.png"
        };

        addProduct(product);

        alert("Produk berhasil ditambahkan!");
        form.reset();
    });
}