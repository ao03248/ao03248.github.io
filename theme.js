(() => {
  const STORAGE_KEY = "site-theme";
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.getElementById("primary-nav");
  const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];

  const setTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.checked = theme === "dark";
    }
  };

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      const nextTheme = themeToggle.checked ? "dark" : "light";
      setTheme(nextTheme);
      localStorage.setItem(STORAGE_KEY, nextTheme);
    });
  }

  if (!menuToggle || !siteNav) {
    return;
  }

  const closeMenu = () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
})();
