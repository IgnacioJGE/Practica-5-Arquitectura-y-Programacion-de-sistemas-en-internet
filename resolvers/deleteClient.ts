import { Request, Response } from "npm:express@4.18.2";
import { ClientModel } from "../db/clients.ts";

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const id  = req.params.id;
    const person = await ClientModel.findOneAndDelete({ _id:id }).exec();

    res.status(200).send( "Cliente eliminado");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

