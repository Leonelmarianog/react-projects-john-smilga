import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.article`
  background-color: ${(props) => `#${props.colorHex}`};
  width: 6em;
  height: 6em;

  @media screen and (min-width: 768px) {
    width: 10em;
    height: 10em;
  }
`;

const Text = styled.p`
  mix-blend-mode: difference;
  color: var(--clr-white-1);
`;

const Color = ({ colorHex, colorWeight }) => (
  <ColorBox colorHex={colorHex}>
    <Text>{colorWeight}%</Text>
    <Text>#{colorHex}</Text>
  </ColorBox>
);

export default Color;
