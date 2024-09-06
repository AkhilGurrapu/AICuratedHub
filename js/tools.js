// tools.js
const featuredTools = [
    { name: 'ChatGPT', description: 'Advanced language model for conversation and text generation', icon: 'fas fa-comment-alt', iconColor: 'text-blue-500', url: 'https://openai.com/chatgpt' },
    { name: 'DALL-E', description: 'AI-powered image generation from textual descriptions', icon: 'fas fa-image', iconColor: 'text-green-500', url: 'https://openai.com/dall-e-2' },
    { name: 'TensorFlow', description: 'Open-source machine learning framework', icon: 'fas fa-brain', iconColor: 'text-orange-500', url: 'https://www.tensorflow.org' }
];

const allTools = [
    { name: 'PyTorch', description: 'Open source machine learning framework', icon: 'fas fa-fire', iconColor: 'text-red-500', url: 'https://pytorch.org' },
    { name: 'Scikit-learn', description: 'Machine learning library for Python', icon: 'fas fa-cogs', iconColor: 'text-purple-500', url: 'https://scikit-learn.org' },
    { name: 'IBM Watson', description: 'AI platform for business applications', icon: 'fas fa-robot', iconColor: 'text-blue-500', url: 'https://www.ibm.com/watson' },
    // Add more tools here
];

function renderToolCard(tool) {
    return `
        <a href="${tool.url}" target="_blank" class="bg-white p-4 rounded shadow hover:shadow-md transition-shadow">
            <div class="flex items-center mb-2">
                <i class="${tool.icon} text-3xl ${tool.iconColor} mr-2"></i>
                <h3 class="font-bold">${tool.name}</h3>
            </div>
            <p>${tool.description}</p>
        </a>
    `;
}

export function renderFeatured() {
    const featuredContainer = document.getElementById('featured');
    featuredContainer.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4">Featured Tools</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${featuredTools.map(renderToolCard).join('')}
        </div>
    `;
}

export function renderAllTools() {
    const allToolsContainer = document.getElementById('allTools');
    allToolsContainer.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4">All Tools</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${allTools.map(renderToolCard).join('')}
        </div>
    `;
}