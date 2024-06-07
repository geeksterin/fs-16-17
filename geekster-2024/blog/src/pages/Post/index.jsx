import { useContext, useState } from "react";
import { PostsContext } from "../../contexts/posts";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { AuthContext } from "../../contexts/auth";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { posts, setPosts } = useContext(PostsContext);
  const {
    authState: { isAuthenticated }
  } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/");
  }

  const addPostToFirestore = async (post) => {
    try {
      const db = getFirestore();
      const collectionRef = collection(db, "posts");
      const docRef = await addDoc(collectionRef, post);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleAddPost = async () => {
    const newPost = { title, description };
    await addPostToFirestore(newPost);
    setPosts([...posts, newPost]);
    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <div className=" h-screen bg-pattern pt-10">
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">Add a New Post</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the post description"
            rows="20"
          />
        </div>
        <button
          onClick={handleAddPost}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Post
        </button>

        {/* <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Posts</h3>
        <ul>
          {posts.map((post, index) => (
            <li key={index} className="mb-2">
              <h4 className="text-lg font-bold">{post.title}</h4>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </div> */}
      </div>
    </div>
  );
};

export default Post;
