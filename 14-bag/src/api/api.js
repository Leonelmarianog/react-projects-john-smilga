const getResource = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something failed when making the request');
  }

  const data = await response.json();
  return data;
};

export default getResource;
