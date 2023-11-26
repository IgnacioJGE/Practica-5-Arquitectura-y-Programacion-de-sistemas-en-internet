import { Request, Response } from "npm:express@4.18.2";
import { RestauranteModel } from "../db/resturantes.ts";

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const id  = req.params.id;
     await RestauranteModel.findOneAndDelete({ _id:id }).exec();
    res.status(200).send( "Restaurante eliminado");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

