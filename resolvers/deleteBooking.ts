import { Request, Response } from "npm:express@4.18.2";
import { BoookingModel } from "../db/bookings.ts";

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const id  = req.params.id;
     await BoookingModel.findOneAndDelete({ _id:id }).exec();
    res.status(200).send( "Reserva eliminada");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

