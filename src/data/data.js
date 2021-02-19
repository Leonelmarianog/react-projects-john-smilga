import React from 'react';
import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

export const sidebarLinks = {
  products: [
    {
      name: 'Payments',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Terminal',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Connect',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Billing',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Corporate Card',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Capital',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Issuing',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Treasury',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Radar',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Sigma',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Atlas',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Climate',
      icon: <FaCreditCard />,
      url: '/',
    },
  ],
  other: [
    {
      name: 'Tarifas',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      name: 'Documentacion',
      icon: <FaBook />,
      url: '/',
    },
    {
      name: 'Soporte',
      icon: <FaBook />,
      url: '/',
    },
    {
      name: 'Acerca de Stripe',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      name: 'Empresa',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      name: 'Empleos',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      name: 'Sala de Prensa',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      name: 'Socios',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      name: 'Blog',
      icon: <FaBriefcase />,
      url: '/',
    },
  ],
};

export const productsCategories = [
  {
    category: 'Pagos',
    products: [
      {
        name: 'Payments',
        description: 'Pagos por internet',
        icon: <FaCreditCard />,
        url: '/',
      },
      {
        name: 'Terminal',
        description: 'Pagos en persona',
        icon: <FaCreditCard />,
        url: '/',
      },
      {
        name: 'Connect',
        description: 'Pagos para plataformas',
        icon: <FaCreditCard />,
        url: '/',
      },
      {
        name: 'Billing',
        description: 'Suscripciones y facturacion',
        icon: <FaCreditCard />,
        url: '/',
      },
    ],
  },
  {
    category: 'Servicios Financieros',
    products: [
      {
        name: 'Corporate Card',
        description: 'Gestion de gastos',
        icon: <FaCreditCard />,
        url: '/',
      },
      {
        name: 'Capital',
        description: 'Financiacion de empresas',
        icon: <FaCreditCard />,
        url: '/',
      },
      {
        name: 'Issuing',
        description: 'Creacion de tarjetas',
        icon: <FaCreditCard />,
        url: '/',
      },
      {
        name: 'Treasury',
        description: 'Banca como servicio',
        icon: <FaCreditCard />,
        url: '/',
      },
    ],
  },
  {
    category: 'Operaciones Comerciales',
    products: [
      {
        name: 'Radar',
        description: 'Gestion de fraudes y riesgos',
        icon: <FaCreditCard />,
        url: '/',
      },
      {
        name: 'Sigma',
        description: 'Informes personalizados',
        icon: <FaCreditCard />,
        url: '/',
      },
      {
        name: 'Atlas',
        description: 'Constitucion de startup',
        icon: <FaCreditCard />,
        url: '/',
      },
      {
        name: 'Climate',
        description: 'Eliminacion del dioxido de carbono',
        icon: <FaCreditCard />,
        url: '/',
      },
    ],
  },
];

/* export const buttons = [
  {
    name: 'Productos',
    subjects: [
      {

        ],
      },
      {
        name: 'Servicios Financieros',
        links: [

        ],
      },
      {
        name: 'Operaciones Comerciales',
        links: [

        ],
      },
    ],
  },
  {
    name: 'Desarrolladores',
    links: [
      {
        name: 'Documentacion',
        description: 'Comenzar a integrar productos y herramientas de Stripe',
        icon: <FaBook />,
        url: '/',
      },
      {
        name: 'Referencia de API completa',
        icon: <FaBook />,
        url: '/',
      },
      {
        name: 'Estado de la API',
        icon: <FaBook />,
        url: '/',
      },
      {
        name: 'Soporte',
        icon: <FaBook />,
        url: '/',
      },
      {
        name: 'Registro de cambios de la API',
        icon: <FaBook />,
        url: '/',
      },
    ],
    subjects: [
      {
        name: 'Empezar',
        links: [
          {
            name: 'Proceso de compra prediseñado',
            url: '/',
          },
          {
            name: 'Librerias y SDK',
            url: '/',
          },
          {
            name: 'Plugins',
            url: '/',
          },
          {
            name: 'Muestras de codigo',
            url: '/',
          },
        ],
      },
      {
        name: 'Guias',
        links: [
          {
            name: 'Aceptar pagos por internet',
            url: '/',
          },
          {
            name: 'Gestionar subscripciones',
            url: '/',
          },
          {
            name: 'Enviar pagos',
            url: '/',
          },
          {
            name: 'Configurar pagos en persona',
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
        name: 'Acerca de Stripe',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        name: 'Empleos',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        name: 'Clientes',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        name: 'Sala de prensa',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        name: 'Empresa',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        name: 'Socios',
        icon: <FaBriefcase />,
        url: '/',
      },
      {
        name: 'Del Blog',
        icon: <FaBriefcase />,
        url: '/',
        sublinks: [
          {
            name: 'Metodos de pago europeos disponibles en todo el mundo',
            url: '/',
          },
          {
            name: 'Creamos Checkout para que tu no tuvieras que hacerlo',
            url: '/',
          },
          {
            name: 'Diseñar y desarrollar un mundo interactivo',
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
 */
