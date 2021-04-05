import React from 'react';
import styled from 'styled-components';
import Color from './Color';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2em;
`;

const ColorsContainer = ({ colors }) => (
  <Container>
    {colors.map((color, index) => {
      const { hex: hexValue, weight: weightValue } = color;
      return <Color key={index + 1} colorWeight={`${weightValue}%`} colorHex={`#${hexValue}`} />;
    })}
  </Container>
);

export default ColorsContainer;
