import { Request, Response } from "npm:express@4.18.2";
import { RestauranteModel } from "../db/resturantes.ts";
export const getRestaurante = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const restaurante = await RestauranteModel.findById(id);

    res.status(200).send({
    name: restaurante?.name,
    CIF: restaurante?.CIF,
    address: restaurante?.address,
    bookings: restaurante?.bookings,
    id:restaurante?._id
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};


