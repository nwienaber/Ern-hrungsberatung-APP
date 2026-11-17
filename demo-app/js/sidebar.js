// Renders the Fachkraft sidebar into <div id="sidebar-mount" data-active="...">.
// Kept as one shared snippet so the five Fachkraft pages don't duplicate it.
(function () {
  const ICONS = {
    klienten: '<circle cx="9" cy="7" r="3.2"/><path d="M2.5 19c1-3.4 3.6-5 6.5-5s5.5 1.6 6.5 5"/><circle cx="17.2" cy="8.2" r="2.4"/><path d="M15.5 12c2.4.1 4 1.5 4.8 4.2"/>',
    screenings: '<path d="M9 3h6l1 4H8l1-4Z"/><path d="M6 7h12l-1 13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L6 7Z"/><path d="M10 11v6M14 11v6"/>',
    plaene: '<path d="M4 19.5V5.6c0-.9.7-1.6 1.6-1.6h9.8c.9 0 1.6.7 1.6 1.6V17l-4 3H5.6c-.9 0-1.6-.7-1.6-1.5Z"/><path d="M8 8h6M8 11.5h6M8 15h3.5"/>',
    nachrichten: '<path d="M4 5.5h16v11H8l-4 3.5v-3.5H4v-11Z"/>',
    einstellungen: '<circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 8.3 3.6l.1.1a1.7 1.7 0 0 0 1.9.3H10.5a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6h.2a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V10.5a1.7 1.7 0 0 0 1.6 1H20a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1Z"/>',
  };
  const ITEMS = [
    { key: "klienten", href: "dashboard.html", label: "Klient:innen" },
    { key: "screenings", href: "dashboard.html", label: "Screenings" },
    { key: "plaene", href: "dashboard.html", label: "Pläne" },
    { key: "nachrichten", href: "dashboard.html", label: "Nachrichten" },
    { key: "einstellungen", href: "einstellungen.html", label: "Einstellungen" },
  ];

  function render() {
    const mount = document.getElementById("sidebar-mount");
    if (!mount) return;
    const active = mount.dataset.active || "klienten";
    const items = ITEMS.map((it) => `
      <a class="navitem ${it.key === active ? "active" : ""}" href="${it.href}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${ICONS[it.key]}</svg>
        ${it.label}
      </a>`).join("");

    mount.innerHTML = `
      <div class="brand-row">
        <div class="brand-logo"></div>
        <div class="brand-name">Ernährungsbegleitung</div>
      </div>
      <div style="display:flex; flex-direction:column; gap:2px; margin-top:8px;">${items}</div>
      <div class="sidebar-foot">
        <div class="avatar">SM</div>
        <div style="min-width:0;">
          <div style="font-size:13px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Sabine Meyer</div>
          <div style="font-size:11px; color:#6B7280;">Diätassistentin</div>
        </div>
      </div>`;
  }
  document.addEventListener("DOMContentLoaded", render);
})();
