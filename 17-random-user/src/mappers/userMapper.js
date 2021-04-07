import { User } from '../entities';

export const fromApiToEntity = ({
  picture: { large },
  name: { first, last },
  email,
  dob: { age },
  location: { country },
  phone,
  login: { password },
}) => {
  const userData = {
    image: large,
    name: `${first} ${last}`,
    email,
    age,
    country,
    phone,
    password,
  };
  return new User(userData);
};
