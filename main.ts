
import express,{Request,Response} from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.5";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { addRestaurante } from "./resolvers/addrestaurante.ts";
import { addCliente } from "./resolvers/addCliente.ts";
import { addBooking } from "./resolvers/addBooking.ts";
import { getCliente } from "./resolvers/getCliente.ts";
import { getRestaurante } from "./resolvers/getRestaurante.ts";
import { getBooking } from "./resolvers/getReserva.ts";
import { deleteClient } from "./resolvers/deleteClient.ts";
import { deleteBooking } from "./resolvers/deleteBooking.ts";
import { deleteRestaurant } from "./resolvers/deleteRestaurant.ts";
import { deleteRestaurants } from "./resolvers/deleteRestaurants.ts";
const env = await load();
const MONGO_URL=env.MONGO_URL||Deno.env.get("MONGO_URL")// si hay .emv lo leo si no lo lee de las variables de entorno de deno
const PORT=env.PORT||Deno.env.get("PORT")
if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

try{
await mongoose.connect(MONGO_URL);
console.info("Mongo Concectado")
const app= express();
app.use(express.json())
app.post("/restaurant",addRestaurante)
   .post("/client",addCliente)
   .post("/booking",addBooking)
   .get("/client/:id",getCliente)
   .get("/restaurant/:id",getRestaurante)
   .get("/booking/:id",getBooking)
   .delete("/deleteClient/:id",deleteClient)
   .delete("/deleteBooking/:id",deleteBooking)
   .delete("/deleteRestaurant/:id",deleteRestaurant)
   .delete("/deleteRestaurants",deleteRestaurants)
app.listen(PORT,()=> console.info ((`Te estoy escuchando desde ${PORT}`)));
}catch(e){
  console.error(e)
}


