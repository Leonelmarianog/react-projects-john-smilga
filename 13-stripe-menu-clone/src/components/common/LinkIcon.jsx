import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: ${({ hasDescription }) =>
    hasDescription ? 'repeat(2, max-content)' : 'repeat(1, max-content)'};
  gap: 0.15em 0.75em;
  width: min-content;

  &:hover {
    & > span {
      color: var(--clr-blue-1);
    }

    & > svg {
      color: var(--clr-blue-1);
    }
  }
`;

const Icon = styled.span`
  grid-column: 1/2;
  grid-row: ${({ iconSize }) => (iconSize === 'big' ? '1/-1' : '1/2')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-blue-4);
  transition: color 0.2s linear;

  & > svg {
    height: auto;
    width: ${({ iconSize }) => (iconSize === 'big' ? '2em' : 'auto')};
  }
`;

const Name = styled.span`
  grid-column: 2/-1;
  grid-row: 1/2;
  color: var(--clr-blue-1);
  font-weight: bold;
  margin: auto 0;
`;

const Description = styled.span`
  grid-column: 2/-1;
  grid-row: 2/-1;
  color: var(--clr-blue-4);
  transition: color 0.2s linear;
`;

const LinkIcon = ({ icon, name, description, url, iconSize }) => (
  <Container href={url} hasDescription={description ? true : false}>
    <Icon iconSize={iconSize}>{icon}</Icon>
    <Name>{name}</Name>
    {description && <Description>{description}</Description>}
  </Container>
);

export default LinkIcon;
