import React from 'react';
import styled from 'styled-components';
import hero from '../assets/hero.svg';
import phone from '../assets/phone.svg';
import useGlobalContext from '../hooks/useGlobalContext';
import LinkButton from './common/LinkButton';

const Container = styled.section`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10em 2em 3em 2em;

  @media screen and (min-width: 768px) {
    padding: 11em 0 3em 0;
  }
`;

const Grid = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.5fr 0.25fr;
    column-gap: 4em;
    justify-content: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: calc(var(--font-size-base) * 3.5);
  font-weight: 900;
  color: var(--clr-blue-1);
  line-height: 1.15em;
  margin: 0.5em 0 0.25em 0;

  @media screen and (min-width: 992px) {
    font-size: calc(var(--font-size-base) * 5.25);
  }
`;

const Paragraph = styled.p`
  font-size: calc(var(--font-size-base) * 1.2);
  color: var(--clr-blue-1);
  line-height: 1.5em;
  margin-bottom: 1.5em;

  @media screen and (min-width: 992px) {
    margin-right: 8em;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

const BlueLinkButton = styled(LinkButton)`
  background-color: var(--clr-blue-1);

  &:hover {
    background-color: var(--clr-blue-3);
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: var(--font-size-base);
  font-weight: bold;
  color: var(--clr-blue-1);
  transition: color 0.2s linear;
  padding-left: 1em;
  margin-top: 1em;

  &:hover {
    color: var(--clr-blue-3);
  }

  @media screen and (min-width: 992px) {
    margin-top: 0;
  }
`;

const PhoneImg = styled.img`
  height: auto;
  width: 250px;
  display: none;
  margin-bottom: auto;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Hero = () => {
  const { setIsSubmenuMounted } = useGlobalContext();

  return (
    <Container background={hero} onMouseOver={() => setIsSubmenuMounted(false)}>
      <Grid>
        <Column>
          <Heading>Infraestructura de pagos para Internet</Heading>
          <Paragraph>
            Millones de empresas de todos los tamaños, desde startups hasta aquellas incluidas en la
            lista de Fortune 500, usan el software y las API de Stripe para aceptar pagos, enviar
            transferencias y gestionar sus actividades comerciales en Internet.
          </Paragraph>
          <LinksContainer>
            <BlueLinkButton href='/'>Empezar ahora</BlueLinkButton>
            <Link href='/'>Contactar con el equipo de ventas</Link>
          </LinksContainer>
        </Column>
        <Column>
          <PhoneImg src={phone} alt='phone' />
        </Column>
      </Grid>
    </Container>
  );
};

export default Hero;
