import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ColorBox = styled.article`
  background-color: ${(props) => props.colorHex};
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

const Helper = styled(Text)`
  font-size: calc(var(--font-size-base) / 1.7);

  @media screen and (min-width: 768px) {
    font-size: calc(var(--font-size-base) / 1.2);
  }
`;

const Color = ({ colorHex, colorWeight }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(colorHex);
  };

  useEffect(() => {
    if (copied) {
      const timerId = setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [copied]);

  return (
    <ColorBox colorHex={colorHex} onClick={handleClick}>
      <Text>{colorWeight}</Text>
      <Text>{colorHex}</Text>
      <Helper>{copied && 'Copied to clipboard!'}</Helper>
    </ColorBox>
  );
};

export default Color;
