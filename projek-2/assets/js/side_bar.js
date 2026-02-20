document.querySelectorAll(".btn-sidebar button").forEach(btn => {
    btn.addEventListener("click", function () {
        const link = this.getAttribute("data-link");

        if (link.includes("login.html")) {
            localStorage.removeItem("user");
        }

        window.location.href = link;
    });
});