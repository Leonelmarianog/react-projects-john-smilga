import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    name: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/',
    name: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/',
    name: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/',
    name: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/',
    name: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: '/',
    icon: <FaFacebook />,
    name: 'facebook',
  },
  {
    id: 2,
    url: '/',
    icon: <FaTwitter />,
    name: 'twitter',
  },
  {
    id: 3,
    url: '/',
    icon: <FaLinkedin />,
    name: 'linkedin',
  },
  {
    id: 4,
    url: '/',
    icon: <FaBehance />,
    name: 'behance',
  },
  {
    id: 5,
    url: '/',
    icon: <FaSketch />,
    name: 'sketch',
  },
];
