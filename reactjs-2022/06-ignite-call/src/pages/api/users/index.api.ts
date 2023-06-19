import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, username } = req.body;

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (userExists) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  });

  setCookie({ res }, '@ignite-call:userId', user.id, {
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: '/',
  });

  return res.status(201).json(user);
}
