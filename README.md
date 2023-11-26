# Practica-5-Arquitectura-y-Programacion-de-sistemas-en-internet
Las funcionalidades de esta api son las siguientes:
/restaurant que necesita un body como
{
"name": "Casa Pepe",
"CIF": "B13529940",
"address": "Ronda de valencia 16",
"bookings":[]
}

/client que necesita un body como:
{
"firstName": "Manolo",
"lastName": "martin",
"email": "mmarne5@alumnos.nebrija.es",
"phoneNumber":"649409048",
"DNI":"09583026F",
"bookings":[]
}
/booking que ncesita un body como:
{
"client": "6562a2067f33b27adfd16e1a",
"restaurant": "6562b272b3f3136570220b36",
"date":"2023-11-12"
}

/client/id que muestra un cliente pasandole su id, ids ejemplo: 6562996737bbd11e107dd963, 6562a2067f33b27adfd16e1a
/restaurant/id que muestra un restaurante dandole su id, ids ejemplo:6562b275b3f3136570220b38, 6562b272b3f3136570220b36, 6562b277b3f3136570220b3a
/booking/id que muestra una reserva pasandole su id, ids ejemplo:6562b2cab3f3136570220b3c, 6562b303b3f3136570220b81, 6562b2ffb3f3136570220b78
/deleteClient/id que elimina un cliente pasandole su id
/deleteRestaurant/id que elimina un restaurante pasandole su id
/deleteBooking/id que elimina una reserva pasandole su id 
/deleteRestaurants que elimina todos los restaurantes
