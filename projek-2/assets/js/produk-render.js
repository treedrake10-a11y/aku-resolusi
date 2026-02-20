const grid = document.querySelector(".produk-grid");
const products = getProducts();

if (grid) {
    grid.innerHTML = "";

    products.forEach(product => {
        grid.innerHTML += `
            <div class="card" onclick="addToCart(${product.id})">
                <img src="${product.gambar}">
                <div class="cart-produk">
                    <h4>${product.nama}</h4>
                    <p class="harga">Rp ${product.harga}</p>
                </div>
                <div class="card-stok">
                    <span>Stok: ${product.stok}</span>
                </div>
            </div>
        `;
    });
}