import React from 'react';
import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const buttons = [
  {
    name: 'Productos',
    subjects: [
      {
        name: 'Pagos',
        links: [
          {
            label: 'Payments',
            description: 'Pagos por internet',
            icon: <FaCreditCard />,
            url: '/',
          },
          {
            label: 'Terminal',
            description: 'Pagos en persona',
            icon: <FaCreditCard />,
            url: '/',
          },
          {
            label: 'cConnect',
            description: 'Pagos para plataformas',
            icon: <FaCreditCard />,
            url: '/',
          },
          {
            label: 'Billing',
            description: 'Suscripciones y facturacion',
            icon: <FaCreditCard />,
            url: '/',
          },
        ],
      },
      {
        name: 'Servicios Financieros',
        links: [
          {
            label: 'Corporate Card',
            description: 'Gestion de gastos',
            icon: <FaCreditCard />,
            url: '/',
          },
          {
            label: 'Capital',
            description: 'Financiacion de empresas',
            icon: <FaCreditCard />,
            url: '/',
          },
          {
            label: 'Issuing',
            description: 'Creacion de tarjetas',
            icon: <FaCreditCard />,
            url: '/',
          },
          {
            label: 'Treasury',
            description: 'Banca como servicio',
            icon: <FaCreditCard />,
            url: '/',
          },
        ],
      },
      {
        name: 'Operaciones Comerciales',
        links: [
          {
            label: 'Radar',
            description: 'Gestion de fraudes y riesgos',
            icon: <FaCreditCard />,
            url: '/',
          },
          {
            label: 'Sigma',
            description: 'Informes personalizados',
            icon: <FaCreditCard />,
            url: '/',
          },
          {
            label: 'Atlas',
            description: 'Constitucion de startup',
            icon: <FaCreditCard />,
            url: '/',
          },
          {
            label: 'Climate',
            description: 'Eliminacion del dioxido de carbono',
            icon: <FaCreditCard />,
            url: '/',
          },
        ],
      },
    ],
  },
  {
    name: 'Desarrolladores',
    links: [
      {
        label: 'Documentacion',
        description: 'Comenzar a integrar productos y herramientas de Stripe',
        icon: <FaBook />,
        url: '/',
      },
      {
        label: 'Referencia de API completa',
        icon: <FaBook />,
        url: '/',
      },
      {
        label: 'Estado de la API',
        icon: <FaBook />,
        url: '/',
      },
      {
        label: 'Soporte',
        icon: <FaBook />,
        url: '/',
      },
      {
        label: 'Registro de cambios de la API',
        icon: <FaBook />,
        url: '/',
      },
    ],
    subjects: [
      {
        name: 'Empezar',
        links: [
          {
            label: 'Proceso de compra prediseñado',
            url: '/',
          },
          {
            label: 'Librerias y SDK',
            url: '/',
          },
          {
            label: 'Plugins',
            url: '/',
          },
          {
            label: 'Muestras de codigo',
            url: '/',
          },
        ],
      },
      {
        name: 'Guias',
        links: [
          {
            label: 'Aceptar pagos por internet',
            url: '/',
          },
          {
            label: 'Gestionar subscripciones',
            url: '/',
          },
          {
            label: 'Enviar pagos',
            url: '/',
          },
          {
            label: 'Configurar pagos en persona',
            url: '/',
          },
        ],
      },
    ],
  },
  {
    name: 'Empresa',
    links: [
      {
        label: 'Acerca de Stripe',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        label: 'Empleos',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        label: 'Clientes',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        label: 'Sala de prensa',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        label: 'Empresa',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        label: 'Socios',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        label: 'Del Blog',
        icon: <FaBriefcase />,
        url: '/',
        sublinks: [
          {
            label: 'Metodos de pago europeos disponibles en todo el mundo',
            url: '/',
          },
          {
            label: 'Creamos Checkout para que tu no tuvieras que hacerlo',
            url: '/',
          },
          {
            label: 'Diseñar y desarrollar un mundo interactivo',
            url: '/',
          },
        ],
      },
    ],
  },
  {
    name: 'Tarifas',
  },
];

export default buttons;
