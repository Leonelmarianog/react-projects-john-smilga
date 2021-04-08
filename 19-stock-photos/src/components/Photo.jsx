import styled from 'styled-components';

const Container = styled.article`
  position: relative;
  overflow: hidden;

  &:hover {
    & > div {
      transform: translateY(0);
    }
  }
`;

const Image = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
  min-width: 200px;
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

export const Photo = () => (
  <Container>
    <Image src='https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjE1NjF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYxNzkwMzM5NQ&ixlib=rb-1.2.1&q=80&w=1080' />
    <Panel>
      <Wrapper>
        <PhotoOwner>Leonel Gauna</PhotoOwner>
        <PhotoLikes>3 Likes</PhotoLikes>
      </Wrapper>
      <Wrapper>
        <a href='/'>
          <OwnerPhoto src='https://images.unsplash.com/profile-1556011314127-d55a7ede3346?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128' />
        </a>
      </Wrapper>
    </Panel>
  </Container>
);
