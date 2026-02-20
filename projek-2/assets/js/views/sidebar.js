// ambil semua tombol sidebar
document.querySelectorAll('.btn-sidebar button').forEach(button => {
    button.addEventListener('click', function () {
        const targetPage = this.getAttribute('data-link');
        window.location.href = targetPage;
    });
});


const currentPage = location.pathname.split('/').pop();

document.querySelectorAll('.btn-sidebar button').forEach(button => {
    const link = button.getAttribute('data-link');

    if (link === currentPage) {
        button.classList.add('active');
    }

    button.addEventListener('click', () => {
        window.location.href = link;
    });
});



document.querySelectorAll(".btn-sidebar button").forEach(btn => {
    btn.addEventListener("click", function () {
        const link = this.getAttribute("data-link");

        if (link.includes("login.html")) {
            localStorage.removeItem("user");
        }

        window.location.href = link;
    });
});