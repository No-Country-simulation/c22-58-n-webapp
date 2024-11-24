-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_categoryId_categoryName_fkey";

-- DropForeignKey
ALTER TABLE "DishImage" DROP CONSTRAINT "DishImage_dishId_fkey";

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_categoryId_categoryName_fkey" FOREIGN KEY ("categoryId", "categoryName") REFERENCES "Category"("id", "catName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishImage" ADD CONSTRAINT "DishImage_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
