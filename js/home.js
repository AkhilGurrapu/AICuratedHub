import { renderCategoryFilter } from './categoryFilter.js';
import { renderToolsGrid } from './toolsGrid.js';
import { initFeaturedTools } from './featuredTools.js';

export function renderHome(container) {
    container.innerHTML = `
        <header class="py-16 text-center">
            <h1 class="text-5xl font-bold mb-4 text-white">AI Tools Directory</h1>
            <p class="text-xl text-purple-200 mb-8">Discover the best AI-powered tools to enhance your workflow</p>
            
            <div class="search-bar mb-8">
                <input type="text" placeholder="Search AI tools..." class="w-full max-w-2xl px-6 py-3 rounded-full bg-white bg-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-lg">
            </div>

            <div class="featured-tools mb-12">
                <h2 class="text-3xl font-semibold mb-4 text-white">Featured Tools</h2>
                <div class="featured-tools-slider relative">
                    <div class="featured-tools-container flex transition-transform duration-300 ease-in-out">
                        <!-- Featured tool cards will be dynamically added here -->
                    </div>
                    <button class="slider-btn prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button class="slider-btn next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="category-filter flex justify-center flex-wrap gap-4 mb-8">
                <!-- Category buttons will be dynamically added here -->
            </div>
        </header>

        <main class="container mx-auto px-4 py-8">
            <div id="tools-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </main>
    `;

    renderCategoryFilter();
    renderToolsGrid();
    initFeaturedTools();
}