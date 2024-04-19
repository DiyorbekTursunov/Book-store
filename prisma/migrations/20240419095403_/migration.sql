/*
  Warnings:

  - You are about to drop the column `title` on the `Book` table. All the data in the column will be lost.
  - Added the required column `categoryName` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_categoryId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "title",
ADD COLUMN     "categoryName" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AuthAsAdmin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "Admintoken" TEXT NOT NULL,

    CONSTRAINT "AuthAsAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthAsAdmin_email_key" ON "AuthAsAdmin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AuthAsAdmin_password_key" ON "AuthAsAdmin"("password");

-- CreateIndex
CREATE UNIQUE INDEX "AuthAsAdmin_Admintoken_key" ON "AuthAsAdmin"("Admintoken");
