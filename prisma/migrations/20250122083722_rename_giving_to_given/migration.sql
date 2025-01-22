/*
  Warnings:

  - You are about to drop the column `givingId` on the `Interest` table. All the data in the column will be lost.
  - You are about to drop the `Giving` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[contact,givenId]` on the table `Interest` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `givenId` to the `Interest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Interest" DROP CONSTRAINT "Interest_givingId_fkey";

-- DropIndex
DROP INDEX "Interest_contact_givingId_key";

-- AlterTable
ALTER TABLE "Interest" DROP COLUMN "givingId",
ADD COLUMN     "givenId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Giving";

-- CreateTable
CREATE TABLE "Given" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL,
    "photos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT,

    CONSTRAINT "Given_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Interest_contact_givenId_key" ON "Interest"("contact", "givenId");

-- AddForeignKey
ALTER TABLE "Interest" ADD CONSTRAINT "Interest_givenId_fkey" FOREIGN KEY ("givenId") REFERENCES "Given"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
