// ================================
// SISTEM LOGIN POS
// ================================

// Data user sementara (nanti bisa diganti database)
const users = [
    { username: "admin", password: "123", role: "admin" },
    { username: "kasir", password: "123", role: "kasir" }
];

// Jika sudah login, langsung redirect
const loggedInUser = JSON.parse(localStorage.getItem("user"));

if (loggedInUser) {
    if (loggedInUser.role === "admin") {
        window.location.href = "admin/admin-dashboard.html";
    } else if (loggedInUser.role === "kasir") {
        window.location.href = "kasir/kasir.html";
    }
}

// Tangkap form login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Cari user
    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (user) {
        // Simpan session
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect berdasarkan role
        if (user.role === "admin") {
            window.location.href = "admin/admin-dashboard.html";
        } else if (user.role === "kasir") {
            window.location.href = "kasir/kasir.html";
        }

    } else {
        errorMessage.innerText = "Username atau password salah!";
        errorMessage.style.color = "red";
    }
});