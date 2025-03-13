const blogList = document.getElementById("blog-list");
const form = document.getElementById("new-post");
const title = document.getElementById("post-title");
const body = document.getElementById("post-body");
let postArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const postTitle = title.value;
  const postBody = body.value;
  const data = {
    title: postTitle,
    body: postBody,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((post) => {
      postArr.unshift(post);
      renderPosts();
      form.reset();
    });
});
function renderPosts() {
  let html = "";
  for (let post of postArr) {
    html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
      `;
  }
  blogList.innerHTML = html;
}
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postArr = data.slice(0, 5);
    renderPosts();
  });
