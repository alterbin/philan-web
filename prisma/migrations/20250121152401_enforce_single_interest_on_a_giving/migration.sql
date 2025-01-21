/*
  Warnings:

  - A unique constraint covering the columns `[contact,givingId]` on the table `Interest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Interest_contact_givingId_key" ON "Interest"("contact", "givingId");
