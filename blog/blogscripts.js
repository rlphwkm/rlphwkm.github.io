document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("blog-container");
    const searchInput = document.getElementById("search");

    fetch("./blogdata.json")
        .then(response => response.json())
        .then(blogs => {
            function renderBlogs(filteredBlogs) {
                blogContainer.innerHTML = "";
                filteredBlogs.forEach(blog => {
                    const blogElement = document.createElement("div");
                    blogElement.classList.add("blog-post");
                    blogElement.innerHTML = `
                        <a href="${blog.url}">
                            <img src="${blog.image}" alt="${blog.title}">
                            <h2>${blog.title}</h2>
                        </a>
                        <p>${blog.description}</p>
                        <p><strong>Author:</strong> ${blog.author} | <strong>Date:</strong> ${blog.date}</p>
                        <p><strong>Tags:</strong> ${blog.tags.join(", ")}</p>
                    `;
                    blogContainer.appendChild(blogElement);
                });
            }

            searchInput.addEventListener("input", () => {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredBlogs = blogs.filter(blog => 
                    blog.title.toLowerCase().includes(searchTerm) || 
                    blog.description.toLowerCase().includes(searchTerm) || 
                    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                );
                renderBlogs(filteredBlogs);
            });

            renderBlogs(blogs);
        })
        .catch(error => console.error("Error loading blogs:", error));
});
