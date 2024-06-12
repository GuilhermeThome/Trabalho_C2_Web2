import { PrismaClient, Comment } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllComments = async () => {
  return await prisma.comment.findMany({
    include: {
      author: true,
      post: true,
    },
  });
};

export const getCommentById = async (id: number) => {
  return await prisma.comment.findUnique({
    where: { id },
    include: {
      author: true,
      post: true,
    },
  });
};

export const createComment = async (content: string, postId: number, authorId: number) => {
  return await prisma.comment.create({
    data: { content, postId, authorId },
    include: {
      author: true,
      post: true,
    },
  });
};

export const updateCommentById = async (id: number, content: string) => {
  const existingComment = await prisma.comment.findUnique({ where: { id } });
  if (!existingComment) {
    return null;
  }
  return await prisma.comment.update({
    where: { id },
    data: { content },
    include: {
      author: true,
      post: true,
    },
  });
};

export const deleteCommentById = async (id: number) => {
  const existingComment = await prisma.comment.findUnique({ where: { id } });
  if (!existingComment) {
    return null;
  }
  return await prisma.comment.delete({
    where: { id },
  });
};
