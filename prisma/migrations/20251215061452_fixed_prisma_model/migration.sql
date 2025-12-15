/*
  Warnings:

  - You are about to drop the `Startup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Startup";

-- CreateTable
CREATE TABLE "startup" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "link" TEXT,
    "pitch" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "startup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "startup_userId_idx" ON "startup"("userId");

-- AddForeignKey
ALTER TABLE "startup" ADD CONSTRAINT "startup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
