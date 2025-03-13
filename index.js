const blogList = document.getElementById("blog-list");
const newPost = document.getElementById("new-post");
let postArr = [];

newPost.addEventListener("submit", (e) => {
  e.preventDefault();
  const postTitle = document.getElementById("post-title").value;
  const postBody = document.getElementById("post-body").value;
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
      renderPosts()
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
