import { useEffect, useState, useRef } from "react";
import { useTitle } from "../hooks/useTitle";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard , SkeletonCard} from "../components";


export const Home = () => {
  const [posts, setPosts] = useState(new Array(2).fill(false));
  const [toogle, setToogle] = useState(false);
  useTitle('Home');
  const postRef = useRef(collection(db, 'posts'));

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(postRef.current);
      setPosts(data.docs.map((document) => (
        {
          ...document.data(), id:document.id
        })
      ));
    }
    getPosts();
  }, [ postRef , toogle]);

  return (
    <section>      
      {posts.map((post, index) => (
        post ? 
        (<PostCard key={post.id} post={post} toogle={toogle} setToogle={setToogle} />) 
        : 
        (<SkeletonCard key={index} />)        
      ))}
    </section>
  )
}
