const blogList = document.getElementById('blog-list');
const filter = document.getElementById('filter');

let limit = 5;



async function getBlogs() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await res.json();
    return data;


}


async function showBlogs() {
    const blogs = await getBlogs();
    blogs.forEach(blog => {
        const tr = document.createElement('tr');
        tr.innerHTML =  `
        <td>${blog.id}</td>
        <td class="blog-title">${blog.title}</td>
        <td><button class="delete"><i class="fas fa-trash"></i></button></td>
       `;
        blogList.appendChild(tr);
    });
}

showBlogs();