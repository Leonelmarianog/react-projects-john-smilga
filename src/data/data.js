import React from 'react';
import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

export const sidebarLinks = {
  products: [
    {
      label: 'Payments',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Terminal',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Connect',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Billing',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Corporate Card',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Capital',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Issuing',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Treasury',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Radar',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Sigma',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Atlas',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Climate',
      icon: <FaCreditCard />,
      url: '/',
    },
  ],
  other: [
    {
      label: 'Tarifas',
      icon: <FaCreditCard />,
      url: '/',
    },
    {
      label: 'Documentacion',
      icon: <FaBook />,
      url: '/',
    },
    {
      label: 'Soporte',
      icon: <FaBook />,
      url: '/',
    },
    {
      label: 'Acerca de Stripe',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      label: 'Empresa',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      label: 'Empleos',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      label: 'Sala de Prensa',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      label: 'Socios',
      icon: <FaBriefcase />,
      url: '/',
    },
    {
      label: 'Blog',
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
 */
