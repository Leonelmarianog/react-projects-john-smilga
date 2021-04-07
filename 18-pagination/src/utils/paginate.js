export const paginate = (items, itemsPerPage) => {
  const numberOfPages = Math.ceil(items.length / itemsPerPage);

  const pages = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });

  return pages;
};
