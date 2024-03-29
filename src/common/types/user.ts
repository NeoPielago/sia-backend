import { Prisma } from '@prisma/client';

export type User = Omit<
  Prisma.UserGetPayload<{
    include: {
      UserInformation: true;
    };
  }>,
  'password'
>;
