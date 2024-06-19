import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { sendReservationEmail } from "../service/resEmail"; // Update the import statement

const prisma = new PrismaClient();

const generateCode = (): number => {
  return Math.floor(1000 + Math.random() * 9000);
};

const convertMinutesToHoursMinutes = (minutes: number): string => {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs}h ${mins}m`;
};

// Create Reservation
export const createReservation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, salleId, dateReservation, heureReservation, duration } =
      req.body;

    // Generate a 4-digit code
    const code = generateCode();

    // Create the reservation
    const newReservation = await prisma.reservation.create({
      data: {
        userId: Number(userId),
        salleId: Number(salleId),
        dateReservation,
        heureReservation,
        duration: Number(duration),
        code,
      },
    });

    // Fetch the user's email
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: { email: true, username: true },
    });

    // Fetch the salle's details
    const salle = await prisma.salle.findUnique({
      where: { id: Number(salleId) },
      select: { number: true, type: true },
    });

    if (user && salle) {
      const { email, username } = user;
      const durationFormatted = convertMinutesToHoursMinutes(
        newReservation.duration
      );
      await sendReservationEmail(email, username, {
        ...newReservation,
        salleNumber: salle.number,
        salleType: salle.type,
        durationFormatted,
      }); // Send reservation email
    }

    // Send the response
    res.status(201).json(newReservation);
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// The rest of the code remains unchanged

export const getReservations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
            role: true,
            email: true,
            phoneNumber: true,
            CEN: true,
            profile: true,
          },
        },
        salle: {
          select: {
            id: true,
            number: true,
            type: true,
            capacity: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });
    res.json(reservations);
  } catch (error) {
    console.error("Error getting reservations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getReservationById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reservationId = parseInt(req.params.id);
    const reservation = await prisma.reservation.findUnique({
      where: { id: reservationId },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            role: true,
            email: true,
            phoneNumber: true,
            CEN: true,
            profile: true,
          },
        },
        salle: {
          select: {
            id: true,
            number: true,
            type: true,
            capacity: true,
          },
        },
      },
    });
    if (!reservation) {
      res.status(404).json({ error: "Reservation not found" });
      return;
    }
    res.json(reservation);
  } catch (error) {
    console.error("Error getting reservation by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateReservation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reservationId = parseInt(req.params.id);
    const {
      userId,
      salleId,
      dateReservation,
      heureReservation,
      duration,
      code,
    } = req.body;

    const updatedReservation = await prisma.reservation.update({
      where: { id: reservationId },
      data: {
        userId: Number(userId),
        salleId: Number(salleId),
        dateReservation,
        heureReservation,
        duration: Number(duration),
        code,
      },
    });

    res.json(updatedReservation);
  } catch (error) {
    console.error("Error updating reservation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteReservation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reservationId = parseInt(req.params.id);
    await prisma.reservation.delete({
      where: { id: reservationId },
    });
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
