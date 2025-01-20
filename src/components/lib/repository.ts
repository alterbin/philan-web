import prisma from "./prisma";

export const createPost = async (data: any) => {
  return await prisma.post.create({ data });
};

export const getAllPosts = async () => {
  return await prisma.post.findMany();
};
