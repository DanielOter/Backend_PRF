-- CreateTable
CREATE TABLE `User` (
    `usr_id` INTEGER NOT NULL AUTO_INCREMENT,
    `usr_name` VARCHAR(50) NOT NULL,
    `usr_lastName` VARCHAR(50) NOT NULL,
    `usr_mail` VARCHAR(50) NOT NULL,
    `usr_phone` VARCHAR(50) NOT NULL,
    `usr_rolId` INTEGER NOT NULL,
    `usr_allowed` BOOLEAN NOT NULL,
    `usr_idNum` VARCHAR(15) NOT NULL,
    `usr_idType` VARCHAR(15) NOT NULL,
    `usr_unit` VARCHAR(15) NULL,
    `usr_uid` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`usr_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `rol_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rol_name` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `Role_rol_name_key`(`rol_name`),
    PRIMARY KEY (`rol_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Guest` (
    `gue_id` INTEGER NOT NULL AUTO_INCREMENT,
    `gue_name` VARCHAR(50) NOT NULL,
    `gue_lastName` VARCHAR(50) NOT NULL,
    `gue_idType` VARCHAR(15) NOT NULL,
    `gue_idNum` VARCHAR(15) NOT NULL,
    `gue_image` VARCHAR(90) NOT NULL,
    `gue_usrId` INTEGER NOT NULL,

    PRIMARY KEY (`gue_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `not_id` INTEGER NOT NULL AUTO_INCREMENT,
    `not_title` VARCHAR(25) NOT NULL,
    `not_descrption` VARCHAR(100) NOT NULL,
    `not_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`not_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Register` (
    `reg_id` INTEGER NOT NULL AUTO_INCREMENT,
    `reg_usrId` INTEGER NOT NULL,
    `reg_guestId` INTEGER NOT NULL,
    `reg_entryTime` DATETIME(3) NOT NULL,
    `reg_exitTime` DATETIME(3) NOT NULL,

    PRIMARY KEY (`reg_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_usr_rolId_fkey` FOREIGN KEY (`usr_rolId`) REFERENCES `Role`(`rol_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Guest` ADD CONSTRAINT `Guest_gue_usrId_fkey` FOREIGN KEY (`gue_usrId`) REFERENCES `User`(`usr_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Register` ADD CONSTRAINT `Register_reg_guestId_fkey` FOREIGN KEY (`reg_guestId`) REFERENCES `Guest`(`gue_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
