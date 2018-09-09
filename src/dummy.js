import sushi from './img/sushi.jpg';
import tacos from './img/tacospastor.jpg';
import alitas from './img/alitas.jpg';
import boliche from './img/boliche.jpg';
import cerveza from './img/cerveza.jpg';
import cocteleria from './img/cocteleria.jpg';
import escalada from './img/escalada.jpg';
import gotcha from './img/gotcha.png';
import mojito from './img/mojito.jpg';

export const places = [
    {
        "id": 1,
        "tipo":"restaurante",
        "nombre":"Sushi Kuse",
        "delegacion":"Coyoacán",
        "domicilio":"Miguel Ángel de Quevedo #170",
        "telefono": 5553232122,
        "original": sushi,  
        "promocion" : "Lunes a miércoles sushi 2x1"
     },

    {
        "id": 2,
        "tipo":"restaurante",
        "nombre":"Alitas Nacho",
        "delegacion":"Condesa",
        "domicilio":"Yucatán #60",
        "telefono": 5596482122,
        "original": alitas,  
        "promocion" : "Alitas a mitad de precio los martes."
     },

     {
        "id": 3,
        "tipo":"entretenimiento",
        "nombre":"Bolos Homero",
        "delegacion":"Benito Juárez",
        "domicilio":"Torres Adalid #15",
        "telefono": 5596140312,
        "original": boliche,  
        "promocion" : "Sábados al 3x2 en juegos."
     },

     {
        "id": 4,
        "tipo":"Bar",
        "nombre":"El Compadre",
        "delegacion":"Coyoacán",
        "domicilio":"Carrillo Puerto #12",
        "telefono": 5596978317,
        "original": cerveza,  
        "promocion" : "Cereza nacional $20 después de las 6 pm."
     },

     {
        "id": 5,
        "tipo":"bar",
        "nombre":"D & B",
        "delegacion":"Condesa",
        "domicilio":"Yucatán #74",
        "telefono": 5531217662,
        "original": cocteleria,  
        "promocion" : "Cocteles en $40 los viernes."
     },

     {
        "id": 6,
        "tipo":"entretenimiento",
        "nombre":"El Muro",
        "delegacion":"Coyoacán",
        "domicilio":"Delfín Madrigal #82",
        "telefono": 5598654321,
        "original": escalada,  
        "promocion" : "Lunes no pagan los niños."
     },

     {
        "id": 7,
        "tipo":"entretenimiento",
        "nombre":"Green Zone",
        "delegacion":"Benito Juárez",
        "domicilio":"Efraín Gómez #210",
        "telefono": 5596456317,
        "original": gotcha,  
        "promocion" : "300 balas por solo $150."
     },

     {
        "id": 8,
        "tipo":"bar",
        "nombre":"Rincón Cubano",
        "delegacion":"Condesa",
        "domicilio":"Oaxaca #4",
        "telefono": 5596342122,
        "original": mojito,  
        "promocion" : "Dos mojitos por $100."
     },

     {
        "id": 9,
        "tipo":"restaurante",
        "nombre":"El Trompo Loco",
        "delegacion":"Benito Juárez",
        "domicilio":"Monte Albán #23",
        "telefono": 5596963419,
        "original": tacos,  
        "promocion" : "Pastor al 2x1 fines de semana."
     }
];

export const users = [
    {
        "nombre": "Pablo Trinidad",
        "password": "abc123",
        "favoritos": [
            {
                "id": 1,
                "tipo":"restaurante",
                "nombre":"Sushi Kuse",
                "delegacion":"Coyoacán",
                "domicilio":"Miguel Ángel de Quevedo #170",
                "telefono": 5553232122,
                "original": sushi,  
                "promocion" : "Lunes a miércoles sushi 2x1"
            },

            {
                "id": 9,
                "tipo":"restaurante",
                "nombre":"El Trompo Loco",
                "delegacion":"Benito Juárez",
                "domicilio":"Monte Albán #23",
                "telefono": 5596963419,
                "original": tacos,  
                "promocion" : "Pastor al 2x1 fines de semana."
             },
             
             {
                "id": 7,
                "tipo":"entretenimiento",
                "nombre":"Green Zone",
                "delegacion":"Benito Juárez",
                "domicilio":"Efraín Gómez #210",
                "telefono": 5596456317,
                "original": gotcha,  
                "promocion" : "300 balas por solo $150."
             }
        ]
    }
]