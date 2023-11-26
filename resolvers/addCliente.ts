import { Request, Response } from "npm:express@4.18.2";
import { ClientModel } from "../db/clients.ts";

export const addCliente = async (req: Request, res: Response) => {
  try {
    const nuevocliente= req.body;
    const newCliente = new ClientModel(nuevocliente);
    await newCliente.save();
    res.status(200).send({
        firstName:newCliente.firstName,
        lastName:newCliente.lastName,
        email: newCliente.email,
        phoneNumber:newCliente.phoneNumber,
        DNI: newCliente.DNI,
        bookings: newCliente.bookings
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

