const courses = [
    {
        name: "Introduction to Machine Learning",
        provider: "Coursera",
        description: "Learn the basics of machine learning algorithms and their applications",
        link: "https://www.coursera.org/learn/machine-learning",
        icon: "./images/coursera-icon.png"
    },
    {
        name: "Deep Learning Specialization",
        provider: "Coursera",
        description: "Master deep learning techniques and neural networks",
        link: "https://www.coursera.org/specializations/deep-learning",
        icon: "./images/coursera-icon.png"
    },
    {
        name: "AI for Everyone",
        provider: "Coursera",
        description: "Non-technical course to understand AI's impact on society",
        link: "https://www.coursera.org/learn/ai-for-everyone",
        icon: "./images/coursera-icon.png"
    }
    // Add more courses here
];

function renderCourseCard(course) {
    return `
        <a href="${course.link}" target="_blank" rel="noopener noreferrer" class="course-card bg-white rounded-lg shadow-md overflow-hidden block">
            <div class="p-4 flex flex-col h-full">
                <div class="flex items-center mb-3">
                    <img src="${course.icon}" alt="${course.provider} icon" class="w-10 h-10 mr-3 object-contain">
                    <h2 class="text-lg font-semibold text-gray-800">${course.name}</h2>
                </div>
                <p class="text-sm text-gray-600 mb-3 flex-grow">${course.description}</p>
                <div class="mt-auto">
                    <span class="inline-block bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs font-semibold">${course.provider}</span>
                </div>
            </div>
        </a>
    `;
}

function renderCoursesGrid() {
    const coursesGrid = document.getElementById('courses-grid');
    coursesGrid.innerHTML = courses.map(renderCourseCard).join('');
}

document.addEventListener('DOMContentLoaded', renderCoursesGrid);