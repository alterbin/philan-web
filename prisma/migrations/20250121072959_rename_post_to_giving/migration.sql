/*
  Warnings:

  - The primary key for the `Interest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contactInfo` on the `Interest` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Interest` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Interest` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Interest` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contact` to the `Interest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `givingId` to the `Interest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `Interest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingAddress` to the `Interest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Interest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Interest" DROP CONSTRAINT "Interest_postId_fkey";

-- DropForeignKey
ALTER TABLE "Interest" DROP CONSTRAINT "Interest_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- AlterTable
ALTER TABLE "Interest" DROP CONSTRAINT "Interest_pkey",
DROP COLUMN "contactInfo",
DROP COLUMN "message",
DROP COLUMN "postId",
DROP COLUMN "userId",
ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "givingId" TEXT NOT NULL,
ADD COLUMN     "note" TEXT NOT NULL,
ADD COLUMN     "shippingAddress" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Interest_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Interest_id_seq";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Giving" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL,
    "photos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Giving_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Interest" ADD CONSTRAINT "Interest_givingId_fkey" FOREIGN KEY ("givingId") REFERENCES "Giving"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
