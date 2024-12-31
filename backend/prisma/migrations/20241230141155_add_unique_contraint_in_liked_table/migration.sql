/*
  Warnings:

  - A unique constraint covering the columns `[UserId,BlogId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Like_UserId_BlogId_key" ON "Like"("UserId", "BlogId");
