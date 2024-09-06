// categoryFilter.js
import { categories } from './data.js';
import { renderToolsGrid } from './toolsGrid.js';

export function renderCategoryFilter() {
    const categoryFilter = document.querySelector('.category-filter');
    categoryFilter.innerHTML = `
        <button class="category-btn active" data-category="All">All</button>
        ${categories.map(category => `
            <button class="category-btn" data-category="${category}">${category}</button>
        `).join('')}
    `;

    categoryFilter.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            const selectedCategory = e.target.dataset.category;
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            renderToolsGrid(selectedCategory);
        }
    });
}