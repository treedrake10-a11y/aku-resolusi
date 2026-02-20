let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function addProduct(product) {
    product.id = Date.now();
    products.push(product);
    saveProducts();
}

function getProducts() {
    return products;
}

function updateStock(productId, qty) {
    const product = products.find(p => p.id == productId);
    if (product) {
        product.stok -= qty;
        saveProducts();
    }
}