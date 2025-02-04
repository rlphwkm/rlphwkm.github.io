document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const postSlug = params.get("post");

    fetch("./blogdata.json")
        .then(response => response.json())
        .then(blogs => {
            const post = blogs.find(blog => blog.url.includes(postSlug));
            if (post) {
                document.title = post.title;
                document.getElementById("blog-title").textContent = post.title;
                document.getElementById("blog-meta").textContent = `By ${post.author} | ${post.date}`;
                document.getElementById("blog-image").src = post.image;
                document.getElementById("blog-image").alt = post.title;
                document.getElementById("blog-content").textContent = post.description; // Placeholder for full content

                // Update social share links
                const twitterShare = document.getElementById("twitter-share");
                twitterShare.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
                
                const linkedinShare = document.getElementById("linkedin-share");
                linkedinShare.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
            } else {
                document.querySelector("main").innerHTML = "<h2>Post not found</h2>";
            }
        })
        .catch(error => console.error("Error loading blog post:", error));
});
