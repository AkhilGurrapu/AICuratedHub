const projects = [
    {
        name: "AI Art Generator",
        description: "Create stunning artwork using advanced AI algorithms",
        image: "./images/ai-art-generator.jpg",
        link: "https://example.com/ai-art-generator"
    },
    {
        name: "AI-Powered Chatbot",
        description: "Intelligent conversational AI for customer support",
        image: "./images/ai-chatbot.jpg",
        link: "https://example.com/ai-chatbot"
    },
    {
        name: "AI Music Composer",
        description: "Generate original music compositions using AI",
        image: "./images/ai-music-composer.jpg",
        link: "https://example.com/ai-music-composer"
    }
    // Add more projects as needed
];

function renderProjectCard(project) {
    return `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card bg-white rounded-lg shadow-md overflow-hidden block">
            <img src="${project.image}" alt="${project.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">${project.name}</h2>
                <p class="text-sm text-gray-600">${project.description}</p>
            </div>
        </a>
    `;
}

function renderProjectsGrid() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projects.map(renderProjectCard).join('');
}

document.addEventListener('DOMContentLoaded', renderProjectsGrid);