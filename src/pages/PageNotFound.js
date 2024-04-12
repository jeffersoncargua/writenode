import { useTitle } from '../hooks/useTitle';
import { Link } from 'react-router-dom';
import NotFound from '../assets/images/page-not-found.jpg';

export const PageNotFound = () => {

  useTitle('Page Not Found');

  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={NotFound} alt="Page Not Found" />
      <Link to='/'>
        <button>Back to Home</button>
      </Link>
    </section>
  )
}
