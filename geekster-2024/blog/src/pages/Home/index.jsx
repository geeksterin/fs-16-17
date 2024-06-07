import { useContext } from "react";
import { PostsContext } from "../../contexts/posts";

import PacmanLoader from "react-spinners/PacmanLoader";

const Home = () => {
  const { posts, arePostsLoading } = useContext(PostsContext);

  if (arePostsLoading) {
    return (
      <div className="flex bg-pattern h-screen justify-center items-center">
        <PacmanLoader />
      </div>
    );
  }

  return (
    <div className="bg-pattern h-screen">
      <div className="max-w-2xl mx-auto ">
        <h2 className="text-3xl font-bold mb-6">Posts</h2>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
