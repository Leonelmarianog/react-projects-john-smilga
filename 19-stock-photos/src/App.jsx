import { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles';
import { Search, PhotoList } from './components';
import { getResource } from './api/api.js';
import { fromPlainToPhoto } from './mappers/photoMapper';

const URL = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=`;

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getPhotos = async (url) => {
    try {
      setLoading(true);
      setError(null);
      setData(null);

      const photosData = await getResource(url);

      if (!photosData) {
        throw new Error('No Results');
      }

      const newPhotos = photosData.map((photoData) =>
        fromPlainToPhoto(photoData)
      );

      setPhotos((lastPhotos) => [...lastPhotos, ...newPhotos]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setData(null);
    }
  };

  useEffect(() => {
    getPhotos(`${URL}${page}`);
  }, [page]);

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
        <Search searchTerm={searchTerm} setSearchTermCallback={setSearchTerm} />
        {photos && <PhotoList photos={photos} />}
        {loading && <Notification>Loading...</Notification>}
        {error && <Notification>{error.message}</Notification>}
      </Container>
    </Fragment>
  );
};
