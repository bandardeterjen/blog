Update Add Pagination

HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>085773009666 Bandarnya Laundry Kiloan Dan Satuan Di Jakarta Dan Purwokerto</title>
  <link rel="stylesheet" href="/blog/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
  <div id="header"></div>
  
  <div class="content">
    <h2>Postingan Terbaru</h2>
    <div id="post-list" class="post-list"></div>
    <div id="pagination" class="pagination"></div>
  </div>

  <div id="footer"></div>

  <script>
    const POSTS_PER_PAGE = 5;

    function loadElement(url, elementId) {
      return fetch(url)
        .then(response => {
          if (!response.ok) throw new Error(`Error loading ${url}`);
          return response.text();
        })
        .then(html => {
          document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
          console.error(error);
          document.getElementById(elementId).innerHTML = 
            `<div class="error">Error loading ${elementId}</div>`;
        });
    }

    Promise.all([
      loadElement('/blog/header.html', 'header'),
      loadElement('/blog/footer.html', 'footer'),
      fetch('/blog/posts.json').then(response => response.json())
    ]).then(([_, __, posts]) => {
      document.getElementById('year').textContent = new Date().getFullYear();

      const currentPage = parseInt(new URLSearchParams(window.location.search).get('page')) || 1;
      const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
      const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
      const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

      const postList = document.getElementById('post-list');
      postList.innerHTML = paginatedPosts.map(post => `
        <div class="post-item">
          <h3><a href="${post.url}">${post.title}</a></h3>
          <p>${post.date}</p>
          <p>${post.excerpt}</p>
        </div>
      `).join('');

      const pagination = document.getElementById('pagination');
      pagination.innerHTML = `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>Newer</button>
        ${Array.from({length: totalPages}, (_, i) => i + 1).map(page => `
          <button onclick="changePage(${page})" ${currentPage === page ? 'class="active"' : ''}>${page}</button>
        `).join('')}
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Older</button>
      `;
    }).catch(error => console.error(error));

    window.changePage = (page) => {
      const url = new URL(window.location);
      url.searchParams.set('page', page);
      window.history.pushState({}, '', url);
      location.reload();
    };
  </script>
</body>
</html>
```

JSON
```
<!-- posts.json -->
[
  {
    "title": "My First Blog Post",
    "date": "January 1, 2023",
    "excerpt": "This is a short excerpt from the blog post...",
    "url": "posts/post1.html"
  },
  {
    "title": "Second Post",
    "date": "February 1, 2023",
    "excerpt": "Another example blog post excerpt...",
    "url": "posts/post2.html"
  }
  // Add more posts here
]
```

CSS
```
/* Added to styles.css */
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0;
}

.pagination button {
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.pagination button.active {
  background: #555;
}

.pagination button:disabled {
  background: #999;
  cursor: not-allowed;
}
```

