import { tools } from './data.js';

const featuredTools = tools.slice(0, 5); // Select the first 5 tools as featured

function createFeaturedToolCard(tool) {
    return `
        <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="featured-tool-card bg-white bg-opacity-20 rounded-lg shadow-md overflow-hidden block">
            <div class="p-4 flex flex-col h-full">
                <div class="flex items-center mb-3">
                    <img src="${tool.icon}" alt="${tool.name} icon" class="w-10 h-10 mr-3 object-contain">
                    <h3 class="text-lg font-semibold text-white">${tool.name}</h3>
                </div>
                <p class="text-sm text-gray-200 mb-3 flex-grow description">${tool.description}</p>
                <div class="mt-auto">
                    <span class="inline-block bg-blue-500 bg-opacity-50 text-white rounded-full px-2 py-1 text-xs font-semibold">${tool.category}</span>
                </div>
            </div>
        </a>
    `;
}

export function initFeaturedTools() {
    const container = document.querySelector('.featured-tools-container');
    // Add clones for circular effect
    const clonedTools = [...featuredTools, ...featuredTools, ...featuredTools.slice(0, 2)];
    container.innerHTML = clonedTools.map(createFeaturedToolCard).join('');

    const slider = document.querySelector('.featured-tools-slider');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let currentIndex = featuredTools.length; // Start in the middle
    let isTransitioning = false;

    function updateSlider() {
        const offset = currentIndex * -320; // 300px card width + 20px margin
        container.style.transform = `translateX(${offset}px)`;
    }

    function smoothTransition(direction) {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex += direction;
        container.style.transition = 'transform 0.3s ease-in-out';
        updateSlider();

        setTimeout(() => {
            container.style.transition = 'none';
            if (currentIndex <= 2) {
                currentIndex += featuredTools.length;
            } else if (currentIndex >= featuredTools.length * 2 - 3) {
                currentIndex -= featuredTools.length;
            }
            updateSlider();
            isTransitioning = false;
        }, 300);
    }

    prevBtn.addEventListener('click', () => smoothTransition(-1));
    nextBtn.addEventListener('click', () => smoothTransition(1));

    // Initial position
    updateSlider();
}