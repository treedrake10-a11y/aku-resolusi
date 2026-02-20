let cart = [];
let subtotal = 0;

function addToCart(productId) {
    const product = getProducts().find(p => p.id == productId);

    if (product.stok <= 0) {
        alert("Stok habis!");
        return;
    }

    cart.push(product);
    subtotal += product.harga;

    updateCartUI();
}

function updateCartUI() {
    document.querySelector(".summary span").innerText = "RP " + subtotal;
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang kosong!");
        return;
    }

    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    transactions.push({
        id: Date.now(),
        items: cart,
        total: subtotal,
        tanggal: new Date().toLocaleString()
    });

    localStorage.setItem("transactions", JSON.stringify(transactions));

    cart.forEach(item => {
        updateStock(item.id, 1);
    });

    alert("Transaksi berhasil!");
    location.reload();
}