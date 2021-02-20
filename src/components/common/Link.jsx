import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  text-decoration: none;
  color: var(--clr-blue-2);
  transition: color 0.2s linear;
  white-space: nowrap;

  &:hover {
    color: var(--clr-blue-1);
  }
`;

const Link = ({ url, name }) => <Anchor href={url}>{name}</Anchor>;

export default Link;
