
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.href = "../login.html";
}

// khusus admin
if (window.location.pathname.includes("admin") && user.role !== "admin") {
    window.location.href = "../login.html";
}

// khusus kasir
if (window.location.pathname.includes("kasir") && user.role !== "kasir") {
    window.location.href = "../login.html";
}