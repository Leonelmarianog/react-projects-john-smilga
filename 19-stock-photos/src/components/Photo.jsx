import styled from 'styled-components';

const Container = styled.article`
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

const Panel = styled.div`
  position: absolute;
  top: 60%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--clr-shadow-2);
  display: flex;
  transform: translateY(100%);
  transition: transform 0.2s linear;
`;

const PhotoOwner = styled.h1`
  font-size: calc(var(--font-size-1) * 1);
  color: var(--clr-white);
  margin: 0 0 0.5em 0;
  white-space: nowrap;
`;

const PhotoLikes = styled.p`
  margin: 0;
  color: var(--clr-white);
`;

const OwnerPhoto = styled.img`
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
  altDescription,
  likes,
  owner,
  ownerPic,
  ownerPortfolio,
}) => (
  <Container>
    <Image src={url} alt={altDescription} />
    <Panel>
      <Wrapper>
        <PhotoOwner>{owner}</PhotoOwner>
        <PhotoLikes>{likes} likes</PhotoLikes>
      </Wrapper>
      <Wrapper>
        <a href={ownerPortfolio}>
          <OwnerPhoto src={ownerPic} alt={`${owner} profile picture`} />
        </a>
      </Wrapper>
    </Panel>
  </Container>
);
