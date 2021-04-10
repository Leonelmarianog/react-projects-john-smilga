import { Photo } from '../entities';

export const fromPlainToPhoto = ({
  id,
  alt_description,
  urls: { regular },
  blur_hash,
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
    blurHash: blur_hash,
    altDescription: alt_description,
    likes,
    owner: name,
    ownerPic: large,
    ownerPortfolio: portfolio_url,
  };

  return new Photo(photoData);
};
