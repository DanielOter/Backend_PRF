-- CreateTable
CREATE TABLE `User` (
    `usr_id` INTEGER NOT NULL AUTO_INCREMENT,
    `usr_name` VARCHAR(50) NOT NULL,
    `usr_lastName` VARCHAR(50) NOT NULL,
    `usr_mail` VARCHAR(50) NOT NULL,
    `usr_phone` VARCHAR(50) NOT NULL,
    `usr_rolId` INTEGER NOT NULL,
    `usr_allowed` BOOLEAN NOT NULL,
    `usr_dni` VARCHAR(8) NOT NULL,
    `usr_dniTypeId` INTEGER NOT NULL,
    `usr_unitId` INTEGER NOT NULL,
    `usr_registersId` INTEGER NOT NULL,

    UNIQUE INDEX `User_usr_rolId_key`(`usr_rolId`),
    UNIQUE INDEX `User_usr_dniTypeId_key`(`usr_dniTypeId`),
    UNIQUE INDEX `User_usr_unitId_key`(`usr_unitId`),
    UNIQUE INDEX `User_usr_registersId_key`(`usr_registersId`),
    PRIMARY KEY (`usr_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `rol_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rol_name` VARCHAR(20) NOT NULL,
    `rol_description` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`rol_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unit` (
    `uni_id` INTEGER NOT NULL AUTO_INCREMENT,
    `uni_usrId` INTEGER NOT NULL,

    UNIQUE INDEX `Unit_uni_usrId_key`(`uni_usrId`),
    PRIMARY KEY (`uni_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Guest` (
    `gue_id` INTEGER NOT NULL AUTO_INCREMENT,
    `gue_name` VARCHAR(50) NOT NULL,
    `gue_lastName` VARCHAR(50) NOT NULL,
    `gue_dniTypeId` INTEGER NOT NULL,
    `gue_dni` VARCHAR(8) NOT NULL,
    `gue_iamge` VARCHAR(90) NOT NULL,
    `gue_entryDay` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Guest_gue_dniTypeId_key`(`gue_dniTypeId`),
    PRIMARY KEY (`gue_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DniType` (
    `dty_id` INTEGER NOT NULL AUTO_INCREMENT,
    `dty_type` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`dty_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `not_id` INTEGER NOT NULL AUTO_INCREMENT,
    `not_title` VARCHAR(25) NOT NULL,
    `not_descrption` VARCHAR(100) NOT NULL,
    `not_date` DATETIME(3) NOT NULL,
    `not_roleId` INTEGER NOT NULL,

    UNIQUE INDEX `Notification_not_roleId_key`(`not_roleId`),
    PRIMARY KEY (`not_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Register` (
    `reg_id` INTEGER NOT NULL AUTO_INCREMENT,
    `reg_usrId` INTEGER NOT NULL,
    `reg_guestId` INTEGER NOT NULL,
    `reg_entryTime` DATETIME(3) NOT NULL,
    `reg_exitTime` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Register_reg_usrId_key`(`reg_usrId`),
    UNIQUE INDEX `Register_reg_guestId_key`(`reg_guestId`),
    PRIMARY KEY (`reg_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_usr_rolId_fkey` FOREIGN KEY (`usr_rolId`) REFERENCES `Role`(`rol_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_usr_dniTypeId_fkey` FOREIGN KEY (`usr_dniTypeId`) REFERENCES `DniType`(`dty_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_usr_unitId_fkey` FOREIGN KEY (`usr_unitId`) REFERENCES `Unit`(`uni_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Guest` ADD CONSTRAINT `Guest_gue_dniTypeId_fkey` FOREIGN KEY (`gue_dniTypeId`) REFERENCES `DniType`(`dty_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_not_roleId_fkey` FOREIGN KEY (`not_roleId`) REFERENCES `Role`(`rol_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Register` ADD CONSTRAINT `Register_reg_usrId_fkey` FOREIGN KEY (`reg_usrId`) REFERENCES `User`(`usr_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Register` ADD CONSTRAINT `Register_reg_guestId_fkey` FOREIGN KEY (`reg_guestId`) REFERENCES `Guest`(`gue_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
