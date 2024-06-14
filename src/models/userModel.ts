import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const createUser = async (data: { email: string; name?: string }) => {
  return await prisma.user.create({ data });
};

export const updateUser = async (id: number, data: { email?: string; name?: string }) => {
  return await prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({ where: { id } });
};
