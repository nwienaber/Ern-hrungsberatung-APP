// Shared tiny helpers for the demo app. No framework, no build step —
// plain HTML/CSS/JS so this runs as-is on GitHub Pages.

function qs(sel, root = document) { return root.querySelector(sel); }
function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function applyAccessibilityPref() {
  const fs = localStorage.getItem("fontSize");
  document.body.classList.remove("fs-gross", "fs-sehrgross");
  if (fs === "gross") document.body.classList.add("fs-gross");
  if (fs === "sehrgross") document.body.classList.add("fs-sehrgross");
}
document.addEventListener("DOMContentLoaded", applyAccessibilityPref);

function setFontSize(size) {
  localStorage.setItem("fontSize", size);
  applyAccessibilityPref();
}

function demoAlert(msg) {
  alert("Demo-Hinweis: " + msg);
}

// Service worker is registered only from the root index.html (see inline
// script there) so its scope covers the whole site, including subfolders.
