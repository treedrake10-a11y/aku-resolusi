document.addEventListener("DOMContentLoaded", () => {

    const ctx = document.getElementById("salesChart");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
            datasets: [{
                label: "Penjualan (Rp)",
                data: [
                    1200000,
                    1500000,
                    900000,
                    1800000,
                    2200000,
                    2000000,
                    1700000
                ],
                borderColor: "#2563eb",
                backgroundColor: "rgba(37,99,235,0.15)",
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    ticks: {
                        callback: value => "Rp " + value.toLocaleString("id-ID")
                    }
                }
            }
        }
    });

});






const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
const products = JSON.parse(localStorage.getItem("products")) || [];

const totalPenjualan = transactions.reduce((sum, t) => sum + t.total, 0);
const totalTransaksi = transactions.length;
const totalStok = products.reduce((sum, p) => sum + p.stok, 0);

document.querySelectorAll(".summary .card")[0].querySelector("h3").innerText =
    "Rp " + totalPenjualan;

document.querySelectorAll(".summary .card")[1].querySelector("h3").innerText =
    totalTransaksi;

document.querySelectorAll(".summary .card")[2].querySelector("h3").innerText =
    totalStok;



    