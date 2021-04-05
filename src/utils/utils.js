const getLeftCoord = (element) => {
  return element.getBoundingClientRect().left;
};

const getCenterCoord = (element, offset) => {
  const elementCoords = element.getBoundingClientRect();
  const elementCenterCoord = (elementCoords.left + elementCoords.right + offset) / 2;
  return elementCenterCoord;
};

export { getLeftCoord, getCenterCoord };
