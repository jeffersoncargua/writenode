import { addDoc, collection } from "firebase/firestore";
import { db,auth } from "../firebase/config";
import {useNavigate} from 'react-router-dom';
import { useTitle } from "../hooks/useTitle";

export const CreatePost = () => {
  const postRef= collection(db, 'posts');
  useTitle('Create Post');
  const navigate = useNavigate();

  const handleCreatePost = async (event) => {
    event.preventDefault();
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    }
    await addDoc(postRef,document);
    navigate('/');
  }

  return (
    <section className="create">
      <div className="heading">
        <h3>Add New Post</h3>
      </div>
      <form onSubmit={handleCreatePost} className="createPost">
        <input name="title" type="text" className="title" placeholder="Title" maxLength='50' required />
        <textarea name="description" type="text" className="description" placeholder="Description" maxLength='600' required></textarea>
        <button  type="submit" className="submit">Create</button>
      </form>
    </section>
  )
}
