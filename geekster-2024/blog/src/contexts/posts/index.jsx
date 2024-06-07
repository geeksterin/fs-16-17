import { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const PostsContext = createContext([]);

// eslint-disable-next-line react/prop-types
const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [arePostsLoading, setPostsLoading] = useState(false);

  const getPosts = async () => {
    try {
      setPostsLoading(true);
      const firestore = getFirestore();
      const collectionRef = collection(firestore, "posts");
      const collectionSnapshot = await getDocs(collectionRef);
      const posts = collectionSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setPosts(posts);
      console.log(firestore);
    } catch (e) {
      console.log(e);
    } finally {
      setPostsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, arePostsLoading }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
