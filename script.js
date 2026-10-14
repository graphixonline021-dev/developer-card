
const themeToggleBtn =
    document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    const isDark =
        document.body.getAttribute("data-theme") === "dark";

    if (isDark) {
        document.body.removeAttribute("data-theme");
        themeToggleBtn.textContent = "🌙 Dark Mode";
    } else {
        document.body.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "☀️ Light Mode";
    }
});


const showServicesBtn =
    document.getElementById("show-services");

const servicesBox =
    document.getElementById("services-box");

showServicesBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const isHidden =
        servicesBox.classList.toggle("hidden");

    if (isHidden) {
        showServicesBtn.textContent =
            "🛠️ My Services & Skills";

        showServicesBtn.setAttribute(
            "aria-expanded",
            "false"
        );
    } else {
        showServicesBtn.textContent =
            "❌ Close Services";

        showServicesBtn.setAttribute(
            "aria-expanded",
            "true"
        );
    }
});
