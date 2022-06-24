const socialMedia = {
  users: [
    {
      username: "fernandafreitas"
    }
  ],
  posts: [
    {
      id: 1,
      owner: "fernandafreitas",
      content: "First post"
    }
  ]
}

// CREATE
function createPost(data) {
  socialMedia.posts.push({
    id: socialMedia.posts.length + 1,
    owner: data.owner,
    content: data.content
   })
}

// READ
function getPosts() {
  return socialMedia.posts;
}

// UPDATE
function updatePostContent(id, content) {
  const findPost = getPosts().find((post) => {
    return post.id !== id -1;
  })
  return findPost.content = content;
}

// DELETE
function deletePost(id) {
  const updatedPostsList = getPosts().filter((post) => {
    return post.id !== id;
  });
  return socialMedia.posts = updatedPostsList;
}

// Creating tree Posts
createPost({owner: "fernandafreitas", content: "Second post"});
createPost({owner: "fernandafreitas", content: "Third post"});
createPost({owner: "fernandafreitas", content: "Fourth post"});

// Updating content from Second Post
updatePostContent(2, "Updated second post");

// Deleting First Post
deletePost(1);

// Reading all Posts
console.log(getPosts());
