import { doc, deleteDoc } from "firebase/firestore";
import { auth , db } from "../firebase/config";

export const PostCard = ({post, toogle, setToogle}) => {
  const {id, title,description,author} = post;
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));

  const handleDelete = async () => {
    const document = doc(db, 'posts', id);
    await deleteDoc(document);
    setToogle(!toogle);
  }

  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        <span className="author">{author.name}</span>
        {isAuth && (author.id === auth.currentUser.uid) && 
        <span onClick={handleDelete} className="delete"><i className="bi bi-trash3"></i></span>}        
      </p>
    </div>
  )
}
