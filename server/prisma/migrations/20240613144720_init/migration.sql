-- AlterTable
ALTER TABLE `reservation` MODIFY `dateReservation` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `salle` MODIFY `startHour` VARCHAR(191) NOT NULL,
    MODIFY `endHour` VARCHAR(191) NOT NULL;
