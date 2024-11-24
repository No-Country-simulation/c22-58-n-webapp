-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "userName" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "role" VARCHAR(10)[] DEFAULT ARRAY['manager']::VARCHAR(10)[],
    "createAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATE NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL,
    "catName" VARCHAR(100) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dish" (
    "id" UUID NOT NULL,
    "dishName" VARCHAR(100) NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" UUID NOT NULL,
    "createAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATE NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DishImage" (
    "id" UUID NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "dishId" UUID NOT NULL,

    CONSTRAINT "DishImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_catName_key" ON "Category"("catName");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_catName_key" ON "Category"("id", "catName");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_id_key" ON "Dish"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_dishName_key" ON "Dish"("dishName");

-- CreateIndex
CREATE UNIQUE INDEX "DishImage_id_key" ON "DishImage"("id");

-- CreateIndex
CREATE INDEX "DishImage_dishId_idx" ON "DishImage"("dishId");

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishImage" ADD CONSTRAINT "DishImage_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
