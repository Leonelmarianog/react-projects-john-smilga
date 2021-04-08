import { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles';
import { Search, PhotoList } from './components';
import { getResource } from './api/api.js';
import { fromPlainToPhoto } from './mappers/photoMapper';

const URL = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1em;
`;

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [photos, setPhotos] = useState(null);

  const getPhotos = async (url) => {
    try {
      setLoading(true);
      setError(null);
      setData(null);

      const photosData = await getResource(url);

      if (!photosData) {
        throw new Error('No Results');
      }

      const photos = photosData.map((photoData) => fromPlainToPhoto(photoData));

      setPhotos(photos);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setData(null);
    }
  };

  useEffect(() => {
    getPhotos(URL);
  }, []);

  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Search searchTerm={searchTerm} setSearchTermCallback={setSearchTerm} />
        {photos && <PhotoList photos={photos} />}
      </Container>
    </Fragment>
  );
};
