const blogList = document.getElementById("blog-list");

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postArr = data.slice(0, 5);
    console.log(postArr);
    let html = "";
    for (let post of postArr) {
      html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
      `;
    }
    blogList.innerHTML = html;
  });
