export const getResource = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();

  return data;
};
