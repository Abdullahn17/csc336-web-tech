

const PREMIUM_LIMIT = 5900;  

const grid = document.getElementById('product-grid');
const searchBox = document.getElementById('search');
const sortBtn = document.getElementById('sort-btn');
const noResults = document.getElementById('no-results');
const radios = document.querySelectorAll('input[name="category"]');

let ascending = true;   


function getPrice(col) {
  const text = col.querySelector('.price').textContent;
  return parseInt(text.replace(/[^0-9]/g, ''), 10);
}


function getName(col) {
  return col.querySelector('.card-title').textContent.toLowerCase();
}


function getSelectedCategory() {
  const checked = document.querySelector('input[name="category"]:checked');
  return checked.id.replace('cat-', '');
}

// Show a card only if it matches BOTH the search text and the category
function applyFilters() {
  const query = searchBox.value.trim().toLowerCase();
  const category = getSelectedCategory();
  let visibleCount = 0;

  Array.from(grid.children).forEach(function (col) {
    const nameMatches = getName(col).includes(query);
    const categoryMatches = category === 'all' || col.dataset.category === category;
    const show = nameMatches && categoryMatches;

    col.classList.toggle('d-none', !show);
    if (show) {
      visibleCount++;
    }
  });

  // No match: hide the grid and show the message in its place
  grid.hidden = visibleCount === 0;
  noResults.hidden = visibleCount !== 0;
}


searchBox.addEventListener('input', applyFilters);

// Re-check when the category radio changes, so both filters stay in sync
radios.forEach(function (radio) {
  radio.addEventListener('change', applyFilters);
});

// Sort by price: toggles low -> high, then high -> low, and so on
sortBtn.addEventListener('click', function () {
  const cards = Array.from(grid.children);

  cards.sort(function (a, b) {
    return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
  });

  // appendChild moves each existing card to the end, in the sorted order
  cards.forEach(function (card) {
    grid.appendChild(card);
  });

  sortBtn.textContent = ascending ? 'Sort by price \u25B2' : 'Sort by price \u25BC';
  ascending = !ascending;
});

// On page load: add a "Premium" label to products above the limit
Array.from(grid.children).forEach(function (col) {
  if (getPrice(col) > PREMIUM_LIMIT) {
    const label = document.createElement('span');
    label.className = 'badge premium-label mb-2';
    label.textContent = 'Premium';
    col.querySelector('.card-body').prepend(label);
  }
});

applyFilters();