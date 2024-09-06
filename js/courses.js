export function renderCourses(container) {
    container.innerHTML = `
        <header class="py-16 text-center">
            <h1 class="text-5xl font-bold mb-4 text-white">Free AI Courses</h1>
            <p class="text-xl text-purple-200 mb-8">Learn AI with these top-rated free courses</p>
        </header>

        <main class="container mx-auto px-4 py-8">
            <div id="courses-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </main>
    `;

    const coursesGrid = container.querySelector('#courses-grid');
    renderCourseCards(coursesGrid);
}

function renderCourseCards(container) {
    const courses = [
        { title: "Introduction to Machine Learning", provider: "Coursera", duration: "8 weeks", image: "intro-ml.jpg" },
        { title: "Deep Learning Specialization", provider: "deeplearning.ai", duration: "5 months", image: "deep-learning.jpg" },
        { title: "AI for Everyone", provider: "Coursera", duration: "4 weeks", image: "ai-for-everyone.jpg" },
        // Add more courses as needed
    ];

    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg';
        card.innerHTML = `
            <img src="images/courses/${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
                <p class="text-gray-300 mb-2">Provider: ${course.provider}</p>
                <p class="text-gray-300">Duration: ${course.duration}</p>
            </div>
        `;
        container.appendChild(card);
    });
}