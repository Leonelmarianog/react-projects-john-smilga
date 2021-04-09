import { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles';
import { Search, PhotoList } from './components';
import { getPhotosByPage, getPhotosByPageAndQuery } from '../services/unsplash';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1em;
`;

const Notification = styled.h1`
  color: var(--clr-white);
`;

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (loading) {
      const getPhotos = async (page, searchTerm) => {
        try {
          setError(null);

          if (searchTerm && page === 1) {
            const newPhotos = await getPhotosByPageAndQuery(page, searchTerm);
            setPhotos(newPhotos);
          } else if (searchTerm) {
            const newPhotos = await getPhotosByPageAndQuery(page, searchTerm);
            setPhotos((lastPhotos) => [...lastPhotos, ...newPhotos]);
          } else {
            const newPhotos = await getPhotosByPage(page);
            setPhotos((lastPhotos) => [...lastPhotos, ...newPhotos]);
          }

          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
          setPhotos([]);
        }
      };

      getPhotos(page, searchTerm);
    }
  }, [loading, page, searchTerm]);

  useEffect(() => {
    if (!loading) {
      const handleScroll = () => {
        const windowInnerHeight = window.innerHeight;
        const amountScrolled = window.scrollY;
        const documentHeight = document.body.scrollHeight;
        const reachedLimit =
          windowInnerHeight + amountScrolled === documentHeight;

        if (!loading && reachedLimit) {
          setPage((lastPage) => lastPage + 1);
          setLoading(true);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [loading]);

  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Search
          searchTerm={searchTerm}
          setSearchTermCallback={setSearchTerm}
          setPageCallback={setPage}
          setLoadingCallback={setLoading}
        />
        {photos && <PhotoList photos={photos} />}
        {loading && <Notification>Loading...</Notification>}
        {error && <Notification>{error.message}</Notification>}
      </Container>
    </Fragment>
  );
};
