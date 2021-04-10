import { useState } from 'react';
import styled from 'styled-components';
import { Blurhash } from 'react-blurhash';

const Container = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
  height: 17.5rem;

  &:hover {
    & > div {
      transform: translateY(0);
    }
  }
`;

const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const PhotoInfo = styled.div`
  position: absolute;
  top: 70%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--clr-shadow-2);
  display: flex;
  transform: translateY(100%);
  transition: transform 0.25s linear;
`;

const Owner = styled.h1`
  font-size: calc(var(--font-size-1) * 1);
  color: var(--clr-white);
  margin: 0 0 0.5em 0;
  white-space: nowrap;
`;

const Likes = styled.p`
  margin: 0;
  color: var(--clr-white);
`;

const OwnerPic = styled.img`
  height: auto;
  width: 3em;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Photo = ({
  url,
  blurHash,
  altDescription,
  likes,
  owner,
  ownerPic,
  ownerPortfolio,
}) => {
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const handleLoad = () => {
    setIsPlaceholderVisible(false);
  };

  return (
    <Container>
      {isPlaceholderVisible && (
        <Blurhash
          hash={blurHash}
          width={'100%'}
          height={'100%'}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      <Image src={url} alt={altDescription} onLoad={handleLoad} />
      <PhotoInfo>
        <Wrapper>
          <Owner>{owner}</Owner>
          <Likes>{likes} likes</Likes>
        </Wrapper>
        <Wrapper>
          <a href={ownerPortfolio}>
            <OwnerPic src={ownerPic} alt={`${owner} profile picture`} />
          </a>
        </Wrapper>
      </PhotoInfo>
    </Container>
  );
};
