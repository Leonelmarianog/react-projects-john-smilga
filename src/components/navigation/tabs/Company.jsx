import React from 'react';
import styled from 'styled-components';
import { List, LinkIcon, Link } from '../../common';

const transition = {
  css: '0.2s',
  value: 200,
};

const Container = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 604px;
  height: 332px;
  display: flex;
  flex-direction: column;

  &.tab--enter {
    opacity: 0;
    transform: translateX(50%);
  }

  &.tab--enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.tab--enter-done {
    opacity: 1;
    transform: translateX(0);
  }

  &.tab--exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.tab--exit-active {
    opacity: 0;
    transform: translateX(50%);
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.tab--exit-done {
    opacity: 0;
    transform: translateX(50%);
  }
`;

const Main = styled.main`
  padding: 2em;
`;

const Footer = styled.footer`
  background-color: var(--clr-blue-5);
  margin: auto 0.25em 0.25em 0.25em;
  padding: 2em 1.75em;
  border-radius: 0 0 10px 10px;

  & > ul:first-child {
    margin-bottom: 1em;
  }
`;

const PaddedLink = styled(Link)`
  padding-left: 1.75em;
`;

const Company = ({ information }) => (
  <Container>
    <Main>
      <List columns='2' columnGap='1em' rowGap='1em'>
        {information.main.links.map((link, index) => (
          <li key={index + 1}>
            <LinkIcon {...link} />
          </li>
        ))}
      </List>
    </Main>
    <Footer>
      <List>
        {information.footer.links.map((link, index) => (
          <li key={index + 1}>
            <LinkIcon {...link} />
          </li>
        ))}
      </List>

      <List rowGap='0.5em'>
        {information.footer.sublinks.map((link, index) => (
          <li key={index + 1}>
            <PaddedLink href={link.url}>{link.name}</PaddedLink>
          </li>
        ))}
      </List>
    </Footer>
  </Container>
);

export default Company;
