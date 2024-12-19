document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(
    ".quick-open-widget .quick-open-input"
  );
  const overlay = document.createElement("div");
  overlay.className = "search-overlay";
  document.body.appendChild(overlay);

  searchBar.addEventListener("focus", () => {
    overlay.classList.add("active");
  });

  searchBar.addEventListener("blur", () => {
    overlay.classList.remove("active");
  });
});
