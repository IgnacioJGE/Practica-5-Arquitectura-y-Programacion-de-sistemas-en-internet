import { Request, Response } from "npm:express@4.18.2";
import { BoookingModel } from "../db/bookings.ts";

export const getBooking = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const reserva = await BoookingModel.findOne({_id:id});
    res.status(200).send({
    date: reserva?.date,
    client:reserva?.client.firstName,
    restaurant: reserva?.restaurant.name,
    id:reserva?._id
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};


