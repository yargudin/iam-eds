import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

const isDesktop = window.matchMedia('(min-width: 900px)');

function toggleMenu(nav, forceExpanded = null) {
  const expanded = forceExpanded !== null
    ? !forceExpanded
    : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
}

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav-madrid');
    if (nav.getAttribute('aria-expanded') === 'true' && !isDesktop.matches) {
      toggleMenu(nav);
      nav.querySelector('button').focus();
    }
  }
}

function buildGreca(container) {
  const greca = document.createElement('div');
  greca.className = 'nav-greca';
  // Create a repeating decorative pattern using CSS
  greca.setAttribute('aria-hidden', 'true');
  container.append(greca);
}

export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav-madrid';

  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  // Brand: clean up button styling
  const navBrand = nav.querySelector('.nav-brand');
  if (navBrand) {
    const brandLink = navBrand.querySelector('.button');
    if (brandLink) {
      brandLink.className = '';
      brandLink.closest('.button-container').className = '';
    }
  }

  // Sections: convert nav items into pill-style buttons
  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    const items = navSections.querySelectorAll(':scope .default-content-wrapper > ul > li');
    items.forEach((item, idx) => {
      item.classList.add('nav-pill');
      // First item is active by default
      if (idx === 0) item.classList.add('nav-pill-active');
      item.addEventListener('click', () => {
        items.forEach((el) => el.classList.remove('nav-pill-active'));
        item.classList.add('nav-pill-active');
      });
    });
  }

  // Tools: style the login button and add icons
  const navTools = nav.querySelector('.nav-tools');
  if (navTools) {
    const loginBtn = navTools.querySelector('.button');
    if (loginBtn) {
      loginBtn.className = 'nav-login-btn';
      const container = loginBtn.closest('.button-container');
      if (container) container.className = 'nav-login-container';

      // Add user icon before login text
      const userIcon = document.createElement('span');
      userIcon.className = 'nav-login-icon';
      userIcon.setAttribute('aria-hidden', 'true');
      userIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      </svg>`;
      loginBtn.prepend(userIcon);
    }

    // Add desktop menu (hamburger) icon in tools area
    const menuIcon = document.createElement('div');
    menuIcon.className = 'nav-menu-icon';
    menuIcon.setAttribute('aria-hidden', 'true');
    menuIcon.innerHTML = '<span></span>';
    navTools.append(menuIcon);
  }

  // Hamburger
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav-madrid" aria-label="Open navigation">
    <span class="nav-hamburger-icon"></span>
  </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav));
  navTools.append(hamburger);
  nav.setAttribute('aria-expanded', 'false');

  toggleMenu(nav, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, isDesktop.matches));
  window.addEventListener('keydown', closeOnEscape);


  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);

  // Greca decorative border
  buildGreca(navWrapper);
  block.append(navWrapper);
}
