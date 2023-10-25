import { getServerSession } from 'next-auth/next';
import { authConfig } from '@/configs/auth';

export async function IsAdmin() {
  const session: any = await getServerSession(authConfig);
  return session
};

