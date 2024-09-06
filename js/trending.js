// trending.js
const trendingTools = [
    { name: 'ChatGPT', url: 'https://openai.com/chatgpt' },
    { name: 'Midjourney', url: 'https://www.midjourney.com' },
    { name: 'TensorFlow', url: 'https://www.tensorflow.org' },
    { name: 'Hugging Face', url: 'https://huggingface.co' },
    { name: 'DeepMind', url: 'https://www.deepmind.com' }
];

export function renderTrending() {
    const trendingContainer = document.getElementById('trending');
    trendingContainer.innerHTML = `
        <h2 class="text-xl font-semibold mb-2">Trending This Week</h2>
        <ul>
            ${trendingTools.map(tool => `
                <li>
                    <a href="${tool.url}" target="_blank" class="block py-1 hover:text-blue-500">
                        ${tool.name}
                    </a>
                </li>
            `).join('')}
        </ul>
    `;
}