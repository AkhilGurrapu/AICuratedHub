import { renderHome } from './home.js';
import { renderProjects } from './projects.js';
import { renderCourses } from './courses.js';

const routes = {
    '/': renderHome,
    '/projects': renderProjects,
    '/courses': renderCourses
};

function router() {
    const path = window.location.pathname;
    const renderFunction = routes[path] || routes['/'];
    const content = document.getElementById('content');
    content.innerHTML = '';
    renderFunction(content);

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-route]')) {
            e.preventDefault();
            const route = e.target.getAttribute('href');
            history.pushState(null, '', route);
            router();
        }
    });

    router();
});