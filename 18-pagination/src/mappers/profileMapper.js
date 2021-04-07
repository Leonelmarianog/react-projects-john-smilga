import { Profile } from '../entities';

export const fromApiToEntity = ({ avatar_url, login }) => {
  const profileData = {
    image: avatar_url,
    name: login,
  };

  return new Profile(profileData);
};
