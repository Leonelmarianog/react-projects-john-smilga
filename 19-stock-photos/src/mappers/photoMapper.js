import { Photo } from '../entities';

export const fromPlainToPhoto = ({
  id,
  alt_description,
  urls: { regular },
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { large },
  },
}) => {
  const photoData = {
    id,
    url: regular,
    altDescription: alt_description,
    likes,
    owner: name,
    ownerPic: large,
    ownerPortfolio: portfolio_url,
  };

  return new Photo(photoData);
};
