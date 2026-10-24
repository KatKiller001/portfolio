// Extras only. The content is already in the page: node tools/build.mjs puts
// it there from site/content.json, so the page shows it without JavaScript,
// and search engines and AI agents read all of it. A small extra that needs
// JavaScript goes here, such as an effect; content never does.

// Fallback for sibling-index() in stagger animations if unsupported
if (!CSS.supports('animation-delay: calc(sibling-index() * 60ms)')) {
  const staggerContainers = document.querySelectorAll('main, .highlights, .cv-list, .certifications');
  staggerContainers.forEach((container) => {
    [...container.children].forEach((el, index) => {
      el.style.setProperty('--sibling-index', index + 1);
    });
  });
}
