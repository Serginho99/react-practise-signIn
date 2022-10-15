import React from 'react';
import {
  //   useParams,
  useLocation,
  Link,
  useSearchParams,
} from 'react-router-dom';

export default function Modal() {
  const [search] = useSearchParams();

  const id = search.get('id');

  //   const { id } = useParams();
  const location = useLocation();
  const bigImage = location.state?.images?.find(
    elem => Number(elem.id) === Number(id)
  );

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link to={location.state?.location ?? 'gallery'}>
        <img src={bigImage?.largeImageURL} alt={bigImage?.tags} width="800" />
      </Link>
    </div>
  );
}
