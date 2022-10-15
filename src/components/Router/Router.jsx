import Layout from 'components/Layout/Layout';
import AuthPage from 'pages/AuthPage';
import GalleryPage from 'pages/GalleryPage';
import HomePage from 'pages/HomePage';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthContext } from 'components/AuthContext/AuthContext';
import { useContext, useEffect } from 'react';
import Modal from 'components/Modal/Modal';

export default function Router() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('gallery');
    } else {
      navigate('auth');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="gallery" element={<GalleryPage />}>
          <Route path="modal" element={<Modal />} />
          {/* <Route path=':id/modal' element={<Modal />}/> */}
        </Route>
        <Route path="auth" element={<AuthPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
