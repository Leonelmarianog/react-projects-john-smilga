import React from 'react';
import styled from 'styled-components';
import hero from '../assets/hero.svg';

const Container = styled.section`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: 225vw;
  display: flex;
  flex-direction: column;
  padding: 17em 3em 3em 3em;
`;

const Heading = styled.h1`
  font-size: calc(var(--font-size-base) * 3);
  color: var(--clr-blue-1);
  font-weight: bold;
  line-height: 1em;
  margin-bottom: 1em;
`;

const Paragraph = styled.p`
  font-size: calc(var(--font-size-base) * 1.5);
  color: var(--clr-blue-1);
  margin-bottom: 1.5em;
`;

const Button = styled.a`
  text-decoration: none;
  background-color: var(--clr-blue-1);
  color: var(--clr-white-1);
  font-size: calc(var(--font-size-base) * 1.5);
  font-weight: bold;
  padding: 0.3em 1em 0.6em 1em;
  border-radius: 20px;
  transition: background-color 0.2s linear;
  align-self: flex-start;
  margin-bottom: 1em;

  &:hover {
    background-color: var(--clr-blue-3);
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: calc(var(--font-size-base) * 1.5);
  font-weight: bold;
  color: var(--clr-blue-1);
  transition: color 0.2s linear;
  align-self: flex-start;
  padding-left: 1em;

  &:hover {
    color: var(--clr-blue-3);
  }
`;

const Hero = () => (
  <Container background={hero}>
    <Heading>Infraestructura de pagos para Internet</Heading>
    <Paragraph>
      Millones de empresas de todos los tamaños, desde startups hasta aquellas incluidas en la lista
      de Fortune 500, usan el software y las API de Stripe para aceptar pagos, enviar transferencias
      y gestionar sus actividades comerciales en Internet.
    </Paragraph>
    <Button href='/'>Empezar ahora</Button>
    <Link href='/'>Contactar con el equipo de ventas</Link>
  </Container>
);

export default Hero;
