// header.js
export function renderHeader() {
    const header = document.getElementById('main-header');
    header.innerHTML = `
        <div class="bg-purple-800 py-4">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center">
                    <div class="text-3xl font-bold">AI Tools Directory</div>
                    <nav>
                        <ul class="flex space-x-4">
                            <li><a href="#" class="hover:text-purple-300">Subscribe</a></li>
                            <li><a href="#" class="hover:text-purple-300">Submit Tool</a></li>
                            <li><a href="#" class="hover:text-purple-300">Categories</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    `;
}