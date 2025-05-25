-- AlterTable
ALTER TABLE "users" ADD COLUMN     "age" TEXT,
ADD COLUMN     "district" TEXT NOT NULL DEFAULT 'Dhaka',
ADD COLUMN     "photoUrl" TEXT;
