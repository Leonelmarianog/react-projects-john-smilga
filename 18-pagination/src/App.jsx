import { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles';
import { CardList, Pagination } from './components';
import { fromApiToEntity } from './mappers/profileMapper';
import { getResource } from './api/api';
import { paginate } from './utils';

const Container = styled.main`
  padding: 2em 1em;
`;

const URL = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getData = async (url) => {
      try {
        setLoading(true);
        setError(null);
        setPages(null);

        const profilesData = await getResource(url);

        if (!profilesData) {
          throw new Error('No Results');
        }

        const profiles = profilesData.map((profileData) =>
          fromApiToEntity(profileData)
        );
        const pages = paginate(profiles, 12);

        setPages(pages);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        setPages(null);
      }
    };

    getData(URL);
  }, []);

  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {pages && <CardList page={pages[page]} />}
        {pages && <Pagination pages={pages} setPageCallback={setPage} />}
      </Container>
    </Fragment>
  );
};
