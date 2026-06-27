// ===== MADRASSA APP — MAIN JS =====

// Splash screen
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    const app = document.getElementById('app');
    splash.classList.add('hide');
    app.classList.remove('hidden');
    setTimeout(() => splash.style.display = 'none', 650);
  }, 1800);
});

// Page navigation (home / about / contact)
function showPage(name) {
  // Hide detail page if open
  document.getElementById('detail-page').classList.remove('active');

  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));

  const target = document.getElementById(name + '-page');
  if (target) target.classList.add('active');

  // Update nav
  const btns = document.querySelectorAll('.nav-btn');
  btns.forEach(b => b.classList.remove('active'));
  const pageOrder = ['home', 'about', 'contact'];
  const idx = pageOrder.indexOf(name);
  if (idx >= 0 && btns[idx]) btns[idx].classList.add('active');

  window.scrollTo(0, 0);
}

// Open a section detail
function openSection(key) {
  const data = SECTIONS[key];
  if (!data) return;

  document.getElementById('detail-title').textContent = data.title;
  document.getElementById('detail-content').innerHTML = data.content;

  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));

  document.getElementById('detail-page').classList.add('active');
  window.scrollTo(0, 0);
}

// Go back to home
function goBack() {
  document.getElementById('detail-page').classList.remove('active');
  document.getElementById('home-page').classList.add('active');
  window.scrollTo(0, 0);
}

// Toggle collapsible class cards
function toggleCard(header) {
  const body = header.nextElementSibling;
  const isOpen = body.classList.contains('open');

  // Close all open cards first
  document.querySelectorAll('.class-card-body.open').forEach(b => {
    b.classList.remove('open');
    b.previousElementSibling.classList.remove('open');
  });

  if (!isOpen) {
    body.classList.add('open');
    header.classList.add('open');
  }
}
