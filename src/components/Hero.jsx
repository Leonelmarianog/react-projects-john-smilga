import React from 'react';
import styled from 'styled-components';
import hero from '../assets/hero.svg';
import phone from '../assets/phone.svg';

const Container = styled.section`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 17em 3em 3em 3em;

  @media screen and (min-width: 768px) {
    padding: 11em 3em 3em 3em;
    background-size: contain;
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
  color: var(--clr-blue-1);
  font-weight: bold;
  line-height: 1em;
  margin: 0.5em 0;

  @media screen and (min-width: 992px) {
    font-size: calc(var(--font-size-base) * 5);
  }
`;

const Paragraph = styled.p`
  font-size: calc(var(--font-size-base) * 1.25);
  color: var(--clr-blue-1);
  margin-bottom: 1.5em;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

const LinkBtn = styled.a`
  text-decoration: none;
  background-color: var(--clr-blue-1);
  color: var(--clr-white-1);
  font-size: calc(var(--font-size-base) * 1.5);
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.3em 1em 0.5em 1em;
  border-radius: 20px;
  transition: background-color 0.2s linear;
  margin-bottom: 1em;
  align-self: flex-start;

  &:hover {
    background-color: var(--clr-blue-3);
  }

  @media screen and (min-width: 576px) {
    font-size: calc(var(--font-size-base) * 1.2);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--font-size-base);
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: calc(var(--font-size-base) * 1.5);
  font-weight: bold;
  color: var(--clr-blue-1);
  transition: color 0.2s linear;
  padding-left: 1em;

  &:hover {
    color: var(--clr-blue-3);
  }

  @media screen and (min-width: 576px) {
    font-size: calc(var(--font-size-base) * 1.2);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--font-size-base);
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

const Hero = () => (
  <Container background={hero}>
    <Grid>
      <Column>
        <Heading>Infraestructura de pagos para Internet</Heading>
        <Paragraph>
          Millones de empresas de todos los tamaños, desde startups hasta aquellas incluidas en la
          lista de Fortune 500, usan el software y las API de Stripe para aceptar pagos, enviar
          transferencias y gestionar sus actividades comerciales en Internet.
        </Paragraph>
        <LinksContainer>
          <LinkBtn href='/'>Empezar ahora</LinkBtn>
          <Link href='/'>Contactar con el equipo de ventas</Link>
        </LinksContainer>
      </Column>
      <Column>
        <PhoneImg src={phone} alt='phone' />
      </Column>
    </Grid>
  </Container>
);

export default Hero;
