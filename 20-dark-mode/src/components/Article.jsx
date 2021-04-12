import styled from 'styled-components';
import moment from 'moment';

const Heading = styled.h1`
  margin-bottom: 0.5em;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: calc(var(--font-size-base) * 1.75);
  color: ${({ theme }) => theme.primaryColor};
`;

const Text = styled.p`
  display: block;
  color: ${({ theme }) => theme.fontColor};
  margin: 0 0 0.75em 0;
`;

export const Article = ({ title, date, length, snippet }) => (
  <article>
    <Heading>
      <Link href='/'>{title}</Link>
    </Heading>
    <Text as='small'>
      {moment(date).format('dddd Do, YYYY')} • ☕️ {length} min read
    </Text>
    <Text>{snippet}</Text>
  </article>
);
