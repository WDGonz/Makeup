// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  });
});

// FILTRO DE PORTFOLIO

const filterButtons = document.querySelectorAll('.filters button');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.dataset.filter;

    galleryItems.forEach(item => {
      const visible =
        category === 'all' ||
        item.dataset.category === category;

      item.classList.toggle('hidden', !visible);
    });
  });
});

// Carruseles individuales del portfolio
document.querySelectorAll('.gallery-item[data-images]').forEach(card => {
  const paths = card.dataset.images.split(',').map(path => path.trim());
  const image = card.querySelector('img');
  const label = card.querySelector('.gallery-label');
  let current = 0;
  let isInteracting = false;

  const counter = document.createElement('span');
  counter.className = 'carousel-counter';
  counter.setAttribute('aria-live', 'polite');
  card.append(counter);

  const showImage = (index) => {
    current = (index + paths.length) % paths.length;
    image.src = paths[current];
    counter.textContent = `${current + 1} / ${paths.length}`;
  };

  const addControl = (direction, symbol, text) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `carousel-control ${direction}`;
    button.textContent = symbol;
    button.setAttribute('aria-label', `${text}: ${label.textContent}`);
    button.addEventListener('click', () => showImage(current + (direction === 'next' ? 1 : -1)));
    card.append(button);
  };

  addControl('prev', '‹', 'Imagen anterior');
  addControl('next', '›', 'Imagen siguiente');
  showImage(0);

  card.addEventListener('mouseenter', () => {
    isInteracting = true;
  });
  card.addEventListener('mouseleave', () => {
    isInteracting = false;
  });
  card.addEventListener('focusin', () => {
    isInteracting = true;
  });
  card.addEventListener('focusout', event => {
    if (!card.contains(event.relatedTarget)) {
      isInteracting = false;
    }
  });

  window.setInterval(() => {
    if (
      !isInteracting &&
      !card.classList.contains('hidden') &&
      !document.hidden &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      showImage(current + 1);
    }
  }, 4000);
});
