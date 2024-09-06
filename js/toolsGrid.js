// toolsGrid.js
import { tools } from './data.js';

function renderToolCard(tool) {
    return `
        <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="tool-card bg-white rounded-lg shadow-md overflow-hidden block">
            <div class="p-4 flex flex-col h-full">
                <div class="flex items-center mb-3">
                    <img src="${tool.icon}" alt="${tool.name} icon" class="w-10 h-10 mr-3 object-contain">
                    <h2 class="text-lg font-semibold text-gray-800">${tool.name}</h2>
                </div>
                <p class="text-sm text-gray-600 mb-3 flex-grow description">${tool.description}</p>
                <div class="mt-auto">
                    <span class="inline-block bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs font-semibold">${tool.category}</span>
                </div>
            </div>
        </a>
    `;
}

export function renderToolsGrid(category = 'All') {
    const toolsGrid = document.getElementById('tools-grid');
    const filteredTools = category === 'All' 
        ? tools 
        : tools.filter(tool => tool.category === category);
    
    toolsGrid.innerHTML = filteredTools.map(renderToolCard).join('');
}