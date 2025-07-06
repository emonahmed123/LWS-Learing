import "./App.css";

import { useEffect, useState } from "react";
import api from "./api/api";
function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState({
    message: "",
    status: "",
  });
  const [post, setPost] = useState(null); // post I am editing

  const handleAddPost = async (newPost) => {
    try {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;

      const finalPost = {
        id: id.toString(),
        ...newPost,
      };

      const response = await api.post("/posts", finalPost);

      setPosts([...posts, response.data]);
    } catch (err) {
      setError({
        message: err.response ? err.response.statusText : "An error occurred",
        status: err.response ? err.response.status : 500,
      });
    }
  };

  const handleDeletePost = async (postId) => {
    if (confirm("Are you sure you want to delete the post?")) {
      try {
        await api.delete(`/posts/${postId}`);
        const newPosts = posts.filter((post) => post.id !== postId);
        setPosts(newPosts);
      } catch (err) {
        setError({
          message: err.response ? err.response.statusText : "An error occurred",
        });
      }
    } else {
      console.log("You chose not to delete the post!");
    }
  };

  const handleEditPost = async (updatedPost) => {
    try {
      const response = await api.patch(`/posts/${updatedPost.id}`, updatedPost);

      const updatedPosts = posts.map((post) =>
        post.id === response.data.id ? response.data : post
      );

      setPosts(updatedPosts);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        console.log(response.data);

        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          setError({
            message: err.response.statusText || "An error occurred",
            status: err.response ? err.response.status : 500,
          });
        } else {
          setError({
            message: "An error occurred while fetching posts",
            status: 500,
          });
        }
      }
    };

    fetchPosts();
  }, []);
  console.log(error);

  return (
    <>
      <div>
        <div>
          <h1>API Request with Axios</h1>
          <hr />

          <div>
            <Posts
              posts={posts}
              onDeletePost={handleDeletePost}
              onEditClick={setPost}
            />

            <hr />

            {!post ? (
              <AddPost onAddPost={handleAddPost} />
            ) : (
              <EditPost post={post} onEditPost={handleEditPost} />
            )}

            {error && (
              <>
                <hr />
                <div className="error">{error.message}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
