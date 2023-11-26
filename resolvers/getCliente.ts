import { Request, Response } from "npm:express@4.18.2";
import { ClientModel } from "../db/clients.ts";

export const getCliente = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const cliente = await ClientModel.findById(id);

    res.status(200).send({
    firstName: cliente?.firstName,
    lastName: cliente?.lastName,
    email: cliente?.email,
    phoneNumber: cliente?.phoneNumber,
    DNI: cliente?.DNI,
    bookings: cliente?.bookings
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};


