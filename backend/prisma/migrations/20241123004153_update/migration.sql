/*
  Warnings:

  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" VARCHAR(10)[] DEFAULT ARRAY['user']::VARCHAR(10)[];

-- DropEnum
DROP TYPE "Role";
