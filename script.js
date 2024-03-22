async function fetchGitHubProjects() {
    const url = "https://api.github.com/users/YOUR_USERNAME/repos";
    try {
        const response = await fetch(url);
        const result = await response.json();

        const projectContainer = document.getElementById('github-repos');

        // Loop through and display your GitHub projects
        result.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.innerHTML = `
                        <h3>${project.name}</h3>
                        <p>${project.description || "No description available."}</p>
                        <a href="${project.html_url}" target="_blank">View on GitHub</a>
                    `;

            projectContainer.appendChild(projectElement);
        });
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
    }
}

fetchGitHubProjects(); // Call the function to run it
