import { Access } from "payload";

export const apiKeyAccess: Access = ({ req }) => { 
  if (req.user?.collection === 'users') return true;

  return !!req.user && req.user.collection === 'third-party-access';
}