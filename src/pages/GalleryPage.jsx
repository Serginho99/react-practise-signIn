import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '29165629-e4560c22cdc5666e7412722cd';

const searchApiImg = async (search = '', page = 1) => {
  const respons = await axios.get(
    `?key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&q=${search}&safesearch=true&per_page=12`
  );
  return await respons.data;
};

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    searchApiImg().then(res => setImages(res.hits));
  }, []);

  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          width: '100vw',
        }}
      >
        {images.map(({ id, webformatURL, tags }) => (
          <li key={id}>
            {/* <Link to={`${id}/modal`} state={{ images, location }}> */}
            <Link to={`modal?id=${id}`} state={{ images, location }}>
              <img src={webformatURL} alt={tags} width="300" />
            </Link>
          </li>
        ))}
      </ul>
      )
      <Outlet />
    </>
  );
}
