-- DropForeignKey
ALTER TABLE "DishImage" DROP CONSTRAINT "DishImage_dishId_fkey";

-- AlterTable
ALTER TABLE "DishImage" ALTER COLUMN "dishId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "DishImage" ADD CONSTRAINT "DishImage_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
