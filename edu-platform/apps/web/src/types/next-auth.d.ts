import type { DefaultSession } from 'next-auth';
import type { UserRole } from '@edu-platform/core';

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      id: string;
      role: UserRole;
    };
  }

  interface User {
    role?: UserRole;
  }
}
