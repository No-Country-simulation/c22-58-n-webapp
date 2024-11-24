-- CreateTable
CREATE TABLE "DishImage" (
    "id" UUID NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "dishId" UUID NOT NULL,

    CONSTRAINT "DishImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DishImage_id_key" ON "DishImage"("id");

-- AddForeignKey
ALTER TABLE "DishImage" ADD CONSTRAINT "DishImage_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
