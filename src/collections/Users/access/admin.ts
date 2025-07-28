import type { Access } from 'payload';
import type { User } from '@/payload-types';
import { checkRole } from './checkRole';

const admin: Access = ({ req: { user } }) => {
  if (user && user.collection === 'users') {
    // now user is of type User & { collection: 'users' }
    return checkRole(['admin'], user as User);
  }

  return false;
}

export default admin;