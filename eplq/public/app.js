document.addEventListener('DOMContentLoaded', () => {
    const adminBtn = document.getElementById('adminBtn');
    const userBtn = document.getElementById('userBtn');
    const adminSection = document.getElementById('adminSection');
    const userSection = document.getElementById('userSection');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminUploadForm = document.getElementById('adminUploadForm');
    const userLoginForm = document.getElementById('userLoginForm');
    const userSearchForm = document.getElementById('userSearchForm');
    const searchResults = document.getElementById('searchResults');

    // Mock data for demonstration purposes
    const mockData = [
        { id: 1, name: 'Point of Interest 1', lat: 40.7128, lon: -74.0060 },
        { id: 2, name: 'Point of Interest 2', lat: 34.0522, lon: -118.2437 },
        { id: 3, name: 'Point of Interest 3', lat: 51.5074, lon: -0.1278 },
    ];

    adminBtn.addEventListener('click', () => {
        adminSection.classList.remove('hidden');
        userSection.classList.add('hidden');
    });

    userBtn.addEventListener('click', () => {
        userSection.classList.remove('hidden');
        adminSection.classList.add('hidden');
    });

    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        
        // Simple mock authentication
        if (username === 'admin' && password === 'password') {
            adminLoginForm.classList.add('hidden');
            adminUploadForm.classList.remove('hidden');
        } else {
            alert('Invalid credentials');
        }
    });

    adminUploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = document.getElementById('dataFile').files[0];
        if (file) {
            alert(`File "${file.name}" uploaded successfully!`);
        } else {
            alert('Please select a file to upload.');
        }
    });

    userLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('userUsername').value;
        const password = document.getElementById('userPassword').value;
        
        // Simple mock authentication
        if (username === 'user' && password === 'password') {
            userLoginForm.classList.add('hidden');
            userSearchForm.classList.remove('hidden');
        } else {
            alert('Invalid credentials');
        }
    });

    userSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('searchQuery').value.toLowerCase();
        
        // Simple mock search functionality
        const results = mockData.filter(poi => poi.name.toLowerCase().includes(query));
        
        // Display results
        searchResults.innerHTML = results.length > 0
            ? results.map(poi => `<p>${poi.name} (Lat: ${poi.lat}, Lon: ${poi.lon})</p>`).join('')
            : '<p>No results found.</p>';
    });
});

