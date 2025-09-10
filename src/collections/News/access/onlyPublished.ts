import type { Access } from 'payload';

const onlyPublished: Access = async ({ req }) => {
  if (req.user?.collection === 'third-party-access') {
    return {
      status: {
        equals: 'published',
      },
    };
  }

  return true;
};

export default onlyPublished;