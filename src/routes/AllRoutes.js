import { Routes, Route } from 'react-router-dom';
import { Home, CreatePost, PageNotFound } from '../pages';
import { ProtectedRoutes } from './ProtectedRoutes';

export const AllRoutes = () => {
  return (
    <main>
        <Routes>          
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<ProtectedRoutes><CreatePost /></ProtectedRoutes>} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </main>
  );
}
