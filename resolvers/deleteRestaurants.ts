import { Request, Response } from "npm:express@4.18.2";
import { RestauranteModel } from "../db/resturantes.ts";

export const deleteRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurantes = await RestauranteModel.find().exec();
for (let index = 0; index < restaurantes.length; index++) {
    await RestauranteModel.findOneAndDelete(restaurantes[index]._id)
}


    res.status(200).send( "Restaurantes eliminados");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

