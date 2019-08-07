import { prismaObjectType } from 'nexus-prisma';

export const Post = prismaObjectType({
  name: 'Post',
  definition(t) {
    t.prismaFields([
      '*',
      {
        name: 'content',
        alias: 'body',
      },
    ]);
    t.string('uppercaseTitle', {
      resolve: ({ title }) => title.toUpperCase(),
    });
  },
});
