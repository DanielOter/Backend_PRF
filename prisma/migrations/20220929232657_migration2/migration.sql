/*
  Warnings:

  - You are about to drop the column `rol_notificationId` on the `Role` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[not_roleId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `not_roleId` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Role` DROP FOREIGN KEY `Role_rol_notificationId_fkey`;

-- AlterTable
ALTER TABLE `Notification` ADD COLUMN `not_roleId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Role` DROP COLUMN `rol_notificationId`;

-- CreateIndex
CREATE UNIQUE INDEX `Notification_not_roleId_key` ON `Notification`(`not_roleId`);

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_not_roleId_fkey` FOREIGN KEY (`not_roleId`) REFERENCES `Role`(`rol_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
