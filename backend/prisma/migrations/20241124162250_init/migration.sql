/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dish` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DishImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Table` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "DishImage" DROP CONSTRAINT "DishImage_dishId_fkey";

-- DropForeignKey
ALTER TABLE "order_bill" DROP CONSTRAINT "order_bill_clientId_fkey";

-- DropForeignKey
ALTER TABLE "order_bill" DROP CONSTRAINT "order_bill_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "order_bill" DROP CONSTRAINT "order_bill_tableId_fkey";

-- DropForeignKey
ALTER TABLE "order_detail" DROP CONSTRAINT "order_detail_dishId_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "Dish";

-- DropTable
DROP TABLE "DishImage";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "Table";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "userName" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "role" VARCHAR(10)[] DEFAULT ARRAY['manager']::VARCHAR(10)[],
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "userName" VARCHAR(100) NOT NULL,
    "password" VARCHAR(60) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" VARCHAR(10)[] DEFAULT ARRAY['manager']::VARCHAR(10)[],

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "userName" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table" (
    "id" UUID NOT NULL,
    "tableNumber" INTEGER NOT NULL DEFAULT 1,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dish" (
    "id" UUID NOT NULL,
    "dishName" VARCHAR(100) NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" UUID NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dish_image" (
    "id" UUID NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "dishId" UUID NOT NULL,

    CONSTRAINT "dish_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" UUID NOT NULL,
    "categoryName" VARCHAR(100) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_userName_key" ON "user"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "user_password_key" ON "user"("password");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employee_id_key" ON "employee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_userName_key" ON "employee"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_id_key" ON "client"("id");

-- CreateIndex
CREATE UNIQUE INDEX "client_userName_key" ON "client"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "table_id_key" ON "table"("id");

-- CreateIndex
CREATE UNIQUE INDEX "table_tableNumber_key" ON "table"("tableNumber");

-- CreateIndex
CREATE UNIQUE INDEX "dish_id_key" ON "dish"("id");

-- CreateIndex
CREATE UNIQUE INDEX "dish_dishName_key" ON "dish"("dishName");

-- CreateIndex
CREATE INDEX "dish_categoryId_idx" ON "dish"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "dish_id_dishName_key" ON "dish"("id", "dishName");

-- CreateIndex
CREATE UNIQUE INDEX "dish_image_id_key" ON "dish_image"("id");

-- CreateIndex
CREATE INDEX "dish_image_dishId_idx" ON "dish_image"("dishId");

-- CreateIndex
CREATE UNIQUE INDEX "category_id_key" ON "category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "category_categoryName_key" ON "category"("categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "category_id_categoryName_key" ON "category"("id", "categoryName");

-- AddForeignKey
ALTER TABLE "order_bill" ADD CONSTRAINT "order_bill_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_bill" ADD CONSTRAINT "order_bill_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_bill" ADD CONSTRAINT "order_bill_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dish" ADD CONSTRAINT "dish_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dish_image" ADD CONSTRAINT "dish_image_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
