/*
  Warnings:

  - You are about to drop the column `employeeId` on the `order_bill` table. All the data in the column will be lost.
  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `order_bill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_bill" DROP CONSTRAINT "order_bill_employeeId_fkey";

-- AlterTable
ALTER TABLE "order_bill" DROP COLUMN "employeeId",
ADD COLUMN     "userId" UUID NOT NULL;

-- DropTable
DROP TABLE "employee";

-- AddForeignKey
ALTER TABLE "order_bill" ADD CONSTRAINT "order_bill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;