const getResource = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong.');
  }

  const data = await response.json();

  return data;
};

const URL = 'https://randomuser.me/api/';

export const randomUsersApi = {
  getUser: () => getResource(URL),
};
