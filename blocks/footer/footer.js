import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
    const footerMeta = getMetadata('footer');
    const footerPath = footerMeta
        ? new URL(footerMeta, window.location).pathname
        : '/footer';
    const fragment = await loadFragment(footerPath);

    block.textContent = '';
    const footer = document.createElement('div');

    // Greca
    const greca = document.createElement('div');
    greca.className = 'footer-greca';
    greca.setAttribute('aria-hidden', 'true');
    footer.append(greca);

    // Content row
    const content = document.createElement('div');
    content.className = 'footer-content';

    const sections = [...fragment.querySelectorAll(':scope > .section')];

    // Brand (first section)
    if (sections[0]) {
        const brand = document.createElement('div');
        brand.className = 'footer-brand';
        brand.append(...sections[0].querySelectorAll('p'));
        content.append(brand);
    }

    // Links (second section)
    if (sections[1]) {
        const links = document.createElement('div');
        links.className = 'footer-links';
        links.append(...sections[1].querySelectorAll('p'));
        content.append(links);
    }

    // Social (third section)
    if (sections[2]) {
        const social = document.createElement('div');
        social.className = 'footer-social';
        social.append(...sections[2].querySelectorAll('p'));
        content.append(social);
    }

    footer.append(content);
    block.append(footer);
}
