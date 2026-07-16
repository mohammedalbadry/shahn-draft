// Mobile nav toggle
(function mobileMenu() {
  const btn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isOpen));
    if (icon) icon.className = !isOpen ? 'icon-x text-lg' : 'icon-menu text-lg';
  });
})();

// Games Mobile / Console tabs
(function gamesTabs() {
  const tabs = document.querySelectorAll('.games-tab');
  if (!tabs.length) return;

  const panels = {
    mobile: document.getElementById('games-panel-mobile'),
    console: document.getElementById('games-panel-console'),
  };

  function activate(target) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.gamesTab === target;
      tab.setAttribute('aria-selected', String(isActive));
      tab.classList.toggle('bg-primary', isActive);
      tab.classList.toggle('text-white', isActive);
      tab.classList.toggle('text-muted', !isActive);
    });
    Object.entries(panels).forEach(([key, panel]) => {
      if (!panel) return;
      panel.style.display = key === target ? '' : 'none';
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activate(tab.dataset.gamesTab));
  });
})();
