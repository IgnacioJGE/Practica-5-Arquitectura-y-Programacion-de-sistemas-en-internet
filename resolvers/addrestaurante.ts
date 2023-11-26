import { Request, Response } from "npm:express@4.18.2";
import { RestauranteModel } from "../db/resturantes.ts";

export const addRestaurante = async (req: Request, res: Response) => {
  try {
    const nuevorestaurante= req.body;

    const newRestaurante = new RestauranteModel(nuevorestaurante);
    await newRestaurante.save();

    res.status(200).send({
        namme:newRestaurante.name,
        CIF:newRestaurante.CIF,
        address: newRestaurante.address,
        bookings: newRestaurante.bookings
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

