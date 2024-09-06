export function renderProjects(container) {
    container.innerHTML = `
        <header class="py-16 text-center">
            <h1 class="text-5xl font-bold mb-4 text-white">Interesting AI Projects</h1>
            <p class="text-xl text-purple-200 mb-8">Explore cutting-edge AI projects and innovations</p>
        </header>

        <main class="container mx-auto px-4 py-8">
            <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </main>
    `;

    const projectsGrid = container.querySelector('#projects-grid');
    renderProjectCards(projectsGrid);
}

function renderProjectCards(container) {
    const projects = [
        { title: "AI Image Generator", description: "Create stunning images using advanced AI algorithms.", image: "ai-image-generator.jpg" },
        { title: "Natural Language Processor", description: "Analyze and understand human language with machine learning.", image: "nlp-project.jpg" },
        { title: "Autonomous Drone Navigation", description: "AI-powered drones that navigate complex environments.", image: "drone-navigation.jpg" },
        // Add more projects as needed
    ];

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg';
        card.innerHTML = `
            <img src="images/projects/${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                <p class="text-gray-300">${project.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}