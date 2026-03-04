-- CreateTable
CREATE TABLE `ResidentialPlan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `slug` VARCHAR(50) NOT NULL,
    `currentPrice` DECIMAL(12, 2) NOT NULL,
    `originalPrice` DECIMAL(12, 2) NULL,
    `downloadSpeedMbps` INTEGER NOT NULL,
    `uploadSpeedMbps` INTEGER NOT NULL,
    `description` TEXT NULL,
    `isPopular` BOOLEAN NOT NULL DEFAULT false,
    `displayOrder` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE INDEX `ResidentialPlan_slug_key`(`slug`),
    INDEX `ResidentialPlan_slug_idx`(`slug`),
    INDEX `ResidentialPlan_isActive_displayOrder_idx`(`isActive`, `displayOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
