# CSC336 Web Technologies - Lab Mid Term

- **Name:** YOUR NAME HERE
- **Roll No:** FA24-BCS-159
- **N** = 59
- **BP** = 600 + 59 = **659px**
- **H** = (59 x 7) mod 360 = **53** (accent colour: `hsl(53, 70%, 45%)`)
- **K** = (59 mod 3) + 3 = **5** categories

Project: ShopEasy e-commerce site (Bootstrap 5.3.3 via CDN). Started from a copy of `assignment-2/` (commit "midterm: baseline copy").

## Files changed

- `index.html`
- `product.html`
- `styles.css`
- `script.js` (new file)

## Task 1 - CSS-only category filter

Files: `index.html`, `styles.css`

- Added a `data-category` to each product card (audio, wearables, footwear, travel, home) and 6 radio buttons above the grid ("All" plus the 5 categories). "All" is `checked` on page load.
- Used `main:has(#cat-xxx:checked) section .col:not([data-category="xxx"])` with `display: none`, so non-matching cards are removed from the Bootstrap grid and leave no gaps. No JavaScript.
- The checked label gets `background: hsl(53, 70%, 45%)` so the selected filter looks selected.

## Task 2 - Product page layout with sticky details box

Files: `product.html`, `styles.css`

- Replaced the Bootstrap row/columns with a CSS Grid using named `grid-template-areas` (image, details, description). Below 659px it is one stacked column.
- From 659px: image and details side by side, description full width underneath, using a `@media (min-width: 659px)` rule.
- The details box uses `position: sticky; top: 89px` (89 = (59 mod 40) + 70) with `align-items: start`. The description was made long, and the image taller on wide screens, so the sticky effect is visible.

## Task 3 - JavaScript live search and price sort

Files: `index.html`, `script.js`, `styles.css`

- Added a search box, a "Sort by price" button and a hidden "No products found" message to `index.html`, and linked `script.js`.
- Search matches the product name (case-insensitive) and works together with the category radios: a card shows only if it matches both. If none match, the grid is hidden and the message is shown.
- Sort reads each price from the card text and reorders the existing cards with `appendChild` (low to high, then high to low on the next click). The script also adds a "Premium" label to products above Rs. 5,900 (N x 100). Smart Watch was changed to Rs. 5,999 so the label is visible.

## AI tools used

- Claude (Anthropic)