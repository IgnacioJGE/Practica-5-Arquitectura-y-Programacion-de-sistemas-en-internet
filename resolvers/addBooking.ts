import { Request, Response } from "npm:express@4.18.2";
import { BoookingModel } from "../db/bookings.ts";

export const addBooking = async (req: Request, res: Response) => {
  try {
    const nuevareserva= req.body;

    const newBooking = new BoookingModel(nuevareserva);
    await newBooking.save();
    
    res.status(200).send(newBooking);
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

