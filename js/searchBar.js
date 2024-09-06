// searchBar.js
export function renderSearchBar() {
    const searchBar = document.getElementById('search-bar');
    searchBar.innerHTML = `
        <input type="text" placeholder="Search AI tools..." class="w-full p-2 rounded bg-gray-800 text-white">
    `;
    
    // Add event listener for search functionality
    searchBar.querySelector('input').addEventListener('input', (e) => {
        // Implement search logic here
        console.log('Searching for:', e.target.value);
    });
}