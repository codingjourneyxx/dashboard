/**
 * Dashboard - Folder Viewer
 * Displays folders, then images inside on click
 */

// Configuration - Organize images by folder
const CONFIG = {
    title: 'Template Kits Gallery',
    baseUrl: window.location.origin + window.location.pathname.replace('index.html', ''),
    folders: [
        {
            name: 'Axistudio - Branding & Creative Studio Elementor Template Kit',
            images: [
                { name: '2.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/2.png' },
                { name: '3.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/3.png' },
                { name: '4.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/4.png' },
                { name: '5.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/5.png' },
                { name: '6.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/6.png' },
                { name: '7.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/7.png' },
                { name: '8.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/8.png' },
                { name: '9.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/9.png' },
                { name: '10.png', url: 'Axistudio - Branding & Creative Studio Elementor Template Kit/10.png' },
            ]
        },
        {
            name: 'Business Consulting Wordpress Theme',
            images: [
                { name: 'Business Solutions Theme.png', url: 'Business Consulting Wordpress Theme/Business Solutions Theme.png' },
            ]
        }
    ]
};

// DOM Elements
const folderNameEl = document.getElementById('folderName');
const imageCountEl = document.getElementById('imageCount');
const imageGridEl = document.getElementById('imageGrid');
const emptyStateEl = document.getElementById('emptyState');
const toastEl = document.getElementById('toast');
const imageModalEl = document.getElementById('imageModal');
const modalImageEl = document.getElementById('modalImage');
const closeModalBtn = document.getElementById('closeModal');

// State
let currentFolder = null;

// Lazy load observer (single instance for performance)
const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            lazyObserver.unobserve(img);
        }
    });
}, { rootMargin: '50px' });

/**
 * Lazy load an image using IntersectionObserver
 */
function lazyLoadImage(img) {
    if (img.dataset.src) {
        lazyObserver.observe(img);
    }
}

/**
 * Initialize the dashboard
 */
function init() {
    // Set title
    folderNameEl.textContent = CONFIG.title;

    // Show folders initially
    showFolders();

    // Setup modal close functionality
    setupModal();
}

/**
 * Show folders view
 */
function showFolders() {
    currentFolder = null;
    imageGridEl.innerHTML = '';
    emptyStateEl.classList.add('hidden');

    folderNameEl.textContent = CONFIG.title;
    imageCountEl.textContent = `${CONFIG.folders.length} folder${CONFIG.folders.length !== 1 ? 's' : ''}`;

    // Update header icon to folder
    updateHeaderIcon('folder');

    // Use DocumentFragment for batch DOM insertion
    const fragment = document.createDocumentFragment();
    CONFIG.folders.forEach((folder, index) => {
        const card = createFolderCard(folder, index);
        fragment.appendChild(card);
    });
    imageGridEl.appendChild(fragment);
}

/**
 * Create a folder card element
 */
function createFolderCard(folder, index) {
    const card = document.createElement('div');
    card.className = 'relative overflow-hidden rounded-lg bg-gray-50 aspect-square cursor-pointer border border-gray-200 flex flex-col items-center justify-center p-4 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-100 transition-transform duration-150';

    // Faster staggered animation (max 300ms total delay)
    card.style.cssText = `opacity:0;transform:translateY(10px);animation:fadeIn 0.2s ease forwards;animation-delay:${Math.min(index * 30, 300)}ms;`;

    card.innerHTML = `
        <div class="mb-3">
            <svg class="w-16 h-16 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
            </svg>
        </div>
        <span class="text-sm font-medium text-gray-700 text-center line-clamp-2 px-2">${folder.name}</span>
        <span class="text-xs text-accent mt-2">${folder.images.length} image${folder.images.length !== 1 ? 's' : ''}</span>
    `;

    card.addEventListener('click', () => openFolder(folder));

    return card;
}

/**
 * Open a folder and show its images
 */
function openFolder(folder) {
    currentFolder = folder;
    imageGridEl.innerHTML = '';
    emptyStateEl.classList.add('hidden');

    folderNameEl.textContent = folder.name;
    imageCountEl.textContent = `${folder.images.length} image${folder.images.length !== 1 ? 's' : ''}`;

    // Update header icon to back arrow
    updateHeaderIcon('back');

    if (folder.images.length === 0) {
        emptyStateEl.classList.remove('hidden');
        return;
    }

    // Use DocumentFragment for batch DOM insertion (better performance)
    const fragment = document.createDocumentFragment();
    folder.images.forEach((image, index) => {
        const card = createImageCard(image, index);
        fragment.appendChild(card);
    });
    imageGridEl.appendChild(fragment);
}

/**
 * Update header icon (folder or back arrow)
 */
function updateHeaderIcon(type) {
    const iconContainer = document.querySelector('.folder-icon-container');
    if (!iconContainer) return;

    if (type === 'back') {
        iconContainer.innerHTML = `
            <svg class="w-6 h-6 text-accent cursor-pointer hover:text-accent-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
        `;
        iconContainer.style.cursor = 'pointer';
        iconContainer.onclick = showFolders;
    } else {
        iconContainer.innerHTML = `
            <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
            </svg>
        `;
        iconContainer.style.cursor = 'default';
        iconContainer.onclick = null;
    }
}

/**
 * Load images into the grid (legacy support)
 */
function loadImages() {
    if (currentFolder) {
        openFolder(currentFolder);
    } else {
        showFolders();
    }
}

/**
 * Create an image card element
 * @param {Object} image - Image data { name, url }
 * @param {number} index - Image index for animation delay
 * @returns {HTMLElement} - The image card element
 */
function createImageCard(image, index) {
    const card = document.createElement('div');
    card.className = 'group relative overflow-hidden rounded-lg bg-gray-100 aspect-square cursor-pointer border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-transform duration-150';

    // Stagger animation using CSS custom property (GPU accelerated)
    card.style.cssText = `opacity:0;transform:translateY(10px);animation:fadeIn 0.2s ease forwards;animation-delay:${Math.min(index * 30, 300)}ms;will-change:transform,opacity;`;

    // Full URL for copying
    const fullUrl = image.url.startsWith('http') ? image.url : CONFIG.baseUrl + image.url;

    card.innerHTML = `
        <img data-src="${image.url}" alt="${image.name}" class="w-full h-full object-cover object-top" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23bdcbcc%22><path d=%22M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z%22/></svg>'">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8">
            <span class="text-white text-xs truncate block" title="${image.name}">${image.name}</span>
        </div>
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="bg-black/50 text-white text-xs px-2 py-1 rounded">
                Click: Copy | Double-click: Zoom
            </div>
        </div>
    `;

    // Lazy load image with IntersectionObserver
    const img = card.querySelector('img');
    lazyLoadImage(img);

    // Clean up will-change after animation completes
    card.addEventListener('animationend', () => {
        card.style.willChange = 'auto';
    }, { once: true });

    // Handle single click (copy) vs double click (zoom)
    let clickTimer = null;

    card.addEventListener('click', (e) => {
        if (clickTimer) {
            // Double click detected - clear timer and open modal
            clearTimeout(clickTimer);
            clickTimer = null;
            openModal(image.url, image.name);
        } else {
            // Start timer for single click
            clickTimer = setTimeout(() => {
                copyToClipboard(fullUrl);
                // Visual feedback - brief flash
                card.style.outline = '3px solid #5167FC';
                setTimeout(() => {
                    card.style.outline = '';
                }, 200);
                clickTimer = null;
            }, 250);
        }
    });

    return card;
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    }
}

/**
 * Show toast notification
 */
function showToast() {
    toastEl.classList.add('toast-show');

    setTimeout(() => {
        toastEl.classList.remove('toast-show');
    }, 2000);
}

/**
 * Setup modal functionality
 */
function setupModal() {
    closeModalBtn.addEventListener('click', closeModal);

    imageModalEl.addEventListener('click', (e) => {
        if (e.target === imageModalEl) {
            closeModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModalEl.style.display !== 'none') {
            closeModal();
        }
    });
}

/**
 * Open image modal
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 */
function openModal(src, alt) {
    modalImageEl.src = src;
    modalImageEl.alt = alt;
    imageModalEl.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Close image modal
 */
function closeModal() {
    imageModalEl.style.display = 'none';
    document.body.style.overflow = '';
}

/**
 * Load images dynamically from a folder path
 * This is a helper function for server-side integration
 * @param {string} folderPath - Path to the folder
 * @param {Array} imageFiles - Array of image filenames
 */
function loadFolder(folderPath, imageFiles) {
    CONFIG.folderName = folderPath.split('/').pop() || folderPath;
    CONFIG.images = imageFiles.map(file => ({
        name: file,
        url: `${folderPath}/${file}`
    }));

    // Clear existing grid
    imageGridEl.innerHTML = '';
    emptyStateEl.classList.add('hidden');

    // Reload images
    loadImages();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    init();
});

// Export functions for external use
window.DashboardViewer = {
    loadFolder,
    loadImages,
    copyToClipboard,
    CONFIG
};
