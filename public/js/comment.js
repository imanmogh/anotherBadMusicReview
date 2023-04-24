console.log("ready to post a comment to a post");

const newCommentBtn = document.getElementById("comment");

newCommentBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const comment_body = document.getElementById("comment-name").value;

  console.log(comment_body);

  const url = window.location.href;
  const data = url.split("/");
  const post_id = data[data.length - 1];
  const user_id = data[data.length - 1];

  console.log(post_id);

  await fetch("/api/comment", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment_body: comment_body,
      post_id: post_id,
      // user_id: user_id,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      window.location.href = `/post/${post_id}`;
    }
  });
});