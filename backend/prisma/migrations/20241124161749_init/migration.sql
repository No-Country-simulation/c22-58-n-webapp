-- AlterTable
ALTER TABLE "Dish" ALTER COLUMN "createAt" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createAt" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Role" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
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

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "userName" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table" (
    "id" UUID NOT NULL,
    "tableNumber" INTEGER NOT NULL DEFAULT 1,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_bill" (
    "id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DOUBLE PRECISION NOT NULL,
    "clientId" UUID NOT NULL,
    "employeeId" UUID NOT NULL,
    "tableId" UUID NOT NULL,

    CONSTRAINT "order_bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_detail" (
    "id" UUID NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "orderBillId" UUID NOT NULL,
    "dishId" UUID NOT NULL,

    CONSTRAINT "order_detail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_userName_key" ON "Employee"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_id_key" ON "Client"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Client_userName_key" ON "Client"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Table_id_key" ON "Table"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Table_tableNumber_key" ON "Table"("tableNumber");

-- CreateIndex
CREATE UNIQUE INDEX "order_bill_id_key" ON "order_bill"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_detail_id_key" ON "order_detail"("id");

-- AddForeignKey
ALTER TABLE "order_bill" ADD CONSTRAINT "order_bill_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_bill" ADD CONSTRAINT "order_bill_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_bill" ADD CONSTRAINT "order_bill_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_orderBillId_fkey" FOREIGN KEY ("orderBillId") REFERENCES "order_bill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
