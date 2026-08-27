/* ============================================================
   ESTUDIO FOTOINFANTIL — data.js
   ------------------------------------------------------------
   Toda la información de temáticas vive acá, separada del HTML.
   Para agregar una temática nueva: copiá un objeto del array
   `themes`, cambiá los datos y listo — no hace falta tocar
   ni el HTML ni el CSS.

   Campos:
     id        → identificador único (usado en URLs internas, #hash)
     name      → nombre visible
     tagline   → frase corta que aparece dentro del panel
     category  → "tematicos" | "mesames" | "anito"  (tipo de sesión)
     gender    → "nena" | "nene" | "todos"  (inspiración, no restricción)
     tags      → categorías visuales secundarias (ver sección 22 del brief)
     cover     → foto del escenario vacío
     gallery   → fotos reales de sesiones en ese escenario (puede ir vacío)
     available → true = la temática ya se ofrece en el estudio
   ============================================================ */

const themes = [
  {
    id: "abejita-chiquitita",
    name: "Abejita Chiquitita",
    tagline: "Un jardín zumbón lleno de dulzura.",
    category: "tematicos",
    gender: "nena",
    tags: ["animalitos"],
    cover: "https://i.ibb.co/Kp0dBMWk/Abejita-chiquitita.jpg",
    gallery: [
      "https://i.ibb.co/q3wJzmT1/Abejita-Chiquitita.jpg",
      "https://i.ibb.co/rGt9X6Bd/Abejita-Chiquitita1.jpg",
      "https://i.ibb.co/fYp9n96F/Abejita-Chiquitita2.jpg",
      "https://i.ibb.co/JWsrVnVv/Abejita-Chiquitita3.jpg",
      "https://i.ibb.co/8LxYFN3Z/Abejita-Chiquitita4.jpg",
      "https://i.ibb.co/WW8NG4M5/Abejita-Chiquitita5.jpg"
    ],
    available: true
  },
  {
    id: "animalitos-de-la-selva",
    name: "Animalitos de la Selva",
    tagline: "Una expedición tierna entre amigos peludos.",
    category: "tematicos",
    gender: "todos",
    tags: ["animalitos", "aventuras"],
    cover: "https://i.ibb.co/SXZrj48Z/Animalitos-de-la-selva.jpg",
    gallery: [
      "https://i.ibb.co/Z6nQzkXt/Animalitos-de-la-selva.jpg",
      "https://i.ibb.co/F4v2LDFc/Animalitos-de-la-selva2.jpg",
      "https://i.ibb.co/gbdhKw4Z/Animalitos-de-la-selva3.jpg",
      "https://i.ibb.co/hJdyTDvY/Animalitos-de-la-selva4.jpg",
      "https://i.ibb.co/PZSxXvdz/Animalitos-de-la-selva5.jpg"
    ],
    available: true
  },
  {
    id: "arcoiris",
    name: "Arcoíris",
    tagline: "Colores que alegran cualquier historia.",
    category: "tematicos",
    gender: "todos",
    tags: ["fantasia"],
    cover: "https://i.ibb.co/ZpdjR7Mk/arcoiris.jpg",
    gallery: [
      "https://i.ibb.co/hxcjrWGW/Arcoiris.jpg",
      "https://i.ibb.co/23ZDmkTb/Arcoiris1.jpg",
      "https://i.ibb.co/0RYW2ZsC/Arcoiris2.jpg",
      "https://i.ibb.co/FqCh55qq/Arcoiris3.jpg",
      "https://i.ibb.co/PG4963b2/Arcoiris4.jpg"
    ],
    available: true
  },
  {
    id: "astronauta",
    name: "Astronauta",
    tagline: "Una misión pequeña rumbo a las estrellas.",
    category: "tematicos",
    gender: "nene",
    tags: ["aventuras", "fantasia"],
    cover: "https://i.ibb.co/W49ZK6ty/Astronauta.jpg",
    gallery: [
      "https://i.ibb.co/xS9nqZkT/Astronauta.jpg",
      "https://i.ibb.co/jP10NGtp/Astronauta2.jpg",
      "https://i.ibb.co/0jJJtVhx/Astronauta3.jpg",
      "https://i.ibb.co/tM8m7wcV/austronauta1.jpg"
    ],
    available: true
  },
  {
    id: "autitos",
    name: "Autitos",
    tagline: "Motores chiquitos, sonrisas grandes.",
    category: "tematicos",
    gender: "nene",
    tags: ["vehiculos"],
    cover: "https://i.ibb.co/cXZrdx7R/Autitos.jpg",
    gallery: [],
    available: true
  },
  {
    id: "autos-formula-1",
    name: "Autos Fórmula 1",
    tagline: "A toda velocidad, directo al podio.",
    category: "tematicos",
    gender: "nene",
    tags: ["vehiculos"],
    cover: "https://i.ibb.co/v4rjt9b6/Autos-Formula-1.jpg",
    gallery: [],
    available: true
  },
  {
    id: "batman",
    name: "Batman",
    tagline: "Un pequeño héroe cuida la ciudad.",
    category: "tematicos",
    gender: "nene",
    tags: ["personajes", "aventuras"],
    cover: "https://i.ibb.co/0y1CzZmQ/Batman.jpg",
    gallery: [
      "https://i.ibb.co/Gvz40wyC/Batman.jpg",
      "https://i.ibb.co/4g0c5tgG/Batman1.jpg"
    ],
    available: true
  },
  {
    id: "bautismo",
    name: "Bautismo",
    tagline: "Un recuerdo delicado para un día muy especial.",
    category: "tematicos",
    gender: "todos",
    tags: ["cumpleanos"],
    cover: "https://i.ibb.co/d4R5sxsy/Bautismo.jpg",
    gallery: [
      "https://i.ibb.co/DPXhCnHm/Bautismo.jpg",
      "https://i.ibb.co/RkmkwkHv/Bautismo2.jpg",
      "https://i.ibb.co/twCdkRnr/Bautismo3.jpg"
    ],
    available: true
  },
  {
    id: "blanca-nieves",
    name: "Blanca Nieves",
    tagline: "Un cuento de bosque encantado.",
    category: "tematicos",
    gender: "nena",
    tags: ["princesas", "fantasia"],
    cover: "https://i.ibb.co/yFycqP8r/Blanca-nieves.jpg",
    gallery: [
      "https://i.ibb.co/gFFjWfCM/Blanca-nieves.jpg",
      "https://i.ibb.co/7dF996Z6/Blanca-nieves1.jpg",
      "https://i.ibb.co/JFGwmgvy/Blanca-nieves3.jpg",
      "https://i.ibb.co/wFQC9KCq/Blanca-nieves4.jpg",
      "https://i.ibb.co/KjgZLX8x/Blanca-nieves5.jpg"
    ],
    available: true
  },
  {
    id: "bluey",
    name: "Bluey",
    tagline: "Juegos, risas y una familia divertida.",
    category: "tematicos",
    gender: "todos",
    tags: ["personajes"],
    cover: "https://i.ibb.co/wXbjRsx/Bluey.jpg",
    gallery: [
      "https://i.ibb.co/rNFfx4Q/Bluey.jpg",
      "https://i.ibb.co/Z6b0dhZ5/Bluey1.jpg"
    ],
    available: true
  },
  {
    id: "cars",
    name: "Cars",
    tagline: "Rayo McQueen y sus amigos de carrera.",
    category: "tematicos",
    gender: "nene",
    tags: ["vehiculos", "personajes"],
    cover: "https://i.ibb.co/SX0NH05m/Cars.jpg",
    gallery: [
      "https://i.ibb.co/jZL4JKyZ/Cars.jpg",
      "https://i.ibb.co/4wTFk5FX/Cars1.jpg",
      "https://i.ibb.co/bgwtTV57/Cars2.jpg",
      "https://i.ibb.co/7xB9xr7M/Cars3.jpg",
      "https://i.ibb.co/60cVPHSy/Cars4.jpg"
    ],
    available: true
  },
  {
    id: "casa-del-arbol",
    name: "Casa del Árbol",
    tagline: "Un refugio pequeño entre las hojas.",
    category: "tematicos",
    gender: "todos",
    tags: ["aventuras"],
    cover: "https://i.ibb.co/ycmb3FwQ/Casa-del-Arbol.jpg",
    gallery: [],
    available: true
  },
  {
    id: "castillo-encantado",
    name: "Castillo Encantado",
    tagline: "Torres, sueños y un final feliz.",
    category: "tematicos",
    gender: "nena",
    tags: ["princesas", "fantasia"],
    cover: "https://i.ibb.co/8DrL2CyF/Castillo-encantado.jpg",
    gallery: [
      "https://i.ibb.co/GQKTssfZ/Castillo-encantado.jpg",
      "https://i.ibb.co/Gvzv7Dgj/Castillo-encantado1.jpg",
      "https://i.ibb.co/Ng9qF5sq/Castillo-encantado2.jpg",
      "https://i.ibb.co/XxkcB6VT/Castillo-encantado3.jpg",
      "https://i.ibb.co/8gHRJR75/Castillo-encantado4.jpg"
    ],
    available: true
  },
  {
    id: "castillo-de-hielo",
    name: "Castillo de Hielo",
    tagline: "Un reino congelado y reluciente.",
    category: "tematicos",
    gender: "nena",
    tags: ["princesas", "fantasia"],
    cover: "https://i.ibb.co/V0nFg7Th/Castillo-Hielo.jpg",
    gallery: [
      "https://i.ibb.co/dsB2QLPN/Castillo-Hielo.jpg",
      "https://i.ibb.co/21YvTCCc/Castillo-Hielo1.jpg",
      "https://i.ibb.co/wF4r5Yv4/Castillo-Hielo2.jpg",
      "https://i.ibb.co/zVzgbPhp/Castillo-Hielo3.jpg"
    ],
    available: true
  },
  {
    id: "castillo-magico",
    name: "Castillo Mágico",
    tagline: "Puertas que se abren a mundos de fantasía.",
    category: "tematicos",
    gender: "todos",
    tags: ["fantasia"],
    cover: "https://i.ibb.co/yF1kT77W/Castillo-Magico.jpg",
    gallery: [],
    available: true
  },
  {
    id: "castillo-rosa",
    name: "Castillo Rosa",
    tagline: "Un palacio dulce para una pequeña princesa.",
    category: "tematicos",
    gender: "nena",
    tags: ["princesas", "fantasia"],
    cover: "https://i.ibb.co/8n6KFHk2/Castillo-Rosa.jpg",
    gallery: [],
    available: true
  },
  {
    id: "cenicienta",
    name: "Cenicienta",
    tagline: "Una noche mágica antes de medianoche.",
    category: "tematicos",
    gender: "nena",
    tags: ["princesas", "fantasia"],
    cover: "https://i.ibb.co/dsGKH1Fq/Cenicienta.jpg",
    gallery: [
      "https://i.ibb.co/vxb7nC2w/Cenicienta.jpg",
      "https://i.ibb.co/1G9QhVVW/Cenicienta1.jpg",
      "https://i.ibb.co/nsq1s0GT/Cenicienta2.jpg"
    ],
    available: true
  },
  {
    id: "cerdito-enojon",
    name: "Cerdito Enojón",
    tagline: "Una carita gruñona que enamora igual.",
    category: "tematicos",
    gender: "todos",
    tags: ["animalitos"],
    cover: "https://i.ibb.co/v4zhG9wM/Cerdito-Enojon.jpg",
    gallery: [
      "https://i.ibb.co/zWjh2ZZk/Cerdito-Enojon.jpg",
      "https://i.ibb.co/kVDfgGc1/Cerdito-Enojon1.jpg",
      "https://i.ibb.co/FkL8nRBf/Cerdito-Enojon2.jpg",
      "https://i.ibb.co/233YFhmQ/Cerdito-Enojon4.jpg",
      "https://i.ibb.co/qYwQYRZj/Cerdito-Enojon5.jpg",
      "https://i.ibb.co/6cgbL6nX/Cerdito-Enojon6.jpg"
    ],
    available: true
  },
  {
    id: "coneja-rosa",
    name: "Coneja Rosa",
    tagline: "Orejas largas y un jardín de flores.",
    category: "tematicos",
    gender: "nena",
    tags: ["animalitos", "flores"],
    cover: "https://i.ibb.co/1fQB3MQk/Coneja-rosa.jpg",
    gallery: [
      "https://i.ibb.co/CsYtWkf2/Coneja.jpg",
      "https://i.ibb.co/yFMRfszr/Coneja1.jpg",
      "https://i.ibb.co/qYtxfqGM/Coneja2.jpg",
      "https://i.ibb.co/C3tWqvkL/Coneja3.jpg",
      "https://i.ibb.co/608htRxQ/Coneja4.jpg"
    ],
    available: true
  },
  {
    id: "coquett",
    name: "Coquett",
    tagline: "Lazos, encajes y mucha ternura.",
    category: "tematicos",
    gender: "nena",
    tags: ["flores"],
    cover: "https://i.ibb.co/5WT8WK0b/Coquett.jpg",
    gallery: [
      "https://i.ibb.co/3yHbjqvD/Coquet.jpg",
      "https://i.ibb.co/PZrKNmtV/Coquet1.jpg",
      "https://i.ibb.co/3mpsCF1B/Coquet2.jpg",
      "https://i.ibb.co/j9jyTgd8/Coquet3.jpg",
      "https://i.ibb.co/hRj5Zzxm/Coquet4.jpg"
    ],
    available: true
  },
  {
    id: "dino-beb",
    name: "Dino Beb",
    tagline: "Pisadas gigantes de un dino chiquito.",
    category: "tematicos",
    gender: "nene",
    tags: ["aventuras", "animalitos"],
    cover: "https://i.ibb.co/7NWpSjL6/Dino-Beb-2.jpg",
    gallery: [
      "https://i.ibb.co/XfL1Gmbt/Dinosaurio-A-1.jpg",
      "https://i.ibb.co/cXTrz3Mp/Dinosaurio-A-2.jpg",
      "https://i.ibb.co/LX3ZVQHW/Dinosaurio-A-3.jpg",
      "https://i.ibb.co/JFqn2rXB/Dinosaurio-A-4.jpg",
      "https://i.ibb.co/0RMpqqNL/Dinosaurio-A.jpg",
      "https://i.ibb.co/x0nyksw/Dinosaurio-B-1.jpg",
      "https://i.ibb.co/nN4kPNf5/Dinosaurio-C.jpg",
      "https://i.ibb.co/wFY928G8/Dinosaurio-C1.jpg"
    ],
    available: true
  },
  {
    id: "dragon-ball-z",
    name: "Dragon Ball Z",
    tagline: "Un guerrero pequeño, mucha energía.",
    category: "tematicos",
    gender: "nene",
    tags: ["personajes", "aventuras"],
    cover: "https://i.ibb.co/gZ3mLKyN/Dragon-Ball-Z.jpg",
    gallery: [
      "https://i.ibb.co/FLzV40x4/Dragon-ball-Z-1.jpg",
      "https://i.ibb.co/60xYqyTf/Dragon-ball-Z-2.jpg",
      "https://i.ibb.co/BVCx7vwM/Dragon-ball-Z.jpg"
    ],
    available: true
  },
  {
    id: "el-chavo",
    name: "El Chavo",
    tagline: "Un barrio entrañable y muy divertido.",
    category: "tematicos",
    gender: "todos",
    tags: ["personajes"],
    cover: "https://i.ibb.co/r2sqzvpr/El-chavo.jpg",
    gallery: [
      "https://i.ibb.co/990TR7nq/Chavo.jpg",
      "https://i.ibb.co/JwhzrvT6/Chavo1.jpg",
      "https://i.ibb.co/7tPjxFxM/Chavo2.jpg",
      "https://i.ibb.co/1tZBy73Y/Chavo3.jpg"
    ],
    available: true
  },
  {
    id: "fondo-del-mar",
    name: "Fondo del Mar",
    tagline: "Un océano de colores por descubrir.",
    category: "tematicos",
    gender: "todos",
    tags: ["aventuras", "animalitos"],
    cover: "https://i.ibb.co/HL3k10cv/Fondo-del-mar.jpg",
    gallery: [],
    available: true
  },
  {
    id: "formula-1",
    name: "Fórmula 1",
    tagline: "Casco puesto, carrera a punto de largar.",
    category: "tematicos",
    gender: "nene",
    tags: ["vehiculos"],
    cover: "https://i.ibb.co/Q7FQKtMG/Formula-1-a.jpg",
    gallery: [],
    available: true
  },
  {
    id: "frutillita",
    name: "Frutillita",
    tagline: "Dulce, fresca y llena de color.",
    category: "tematicos",
    gender: "nena",
    tags: ["flores"],
    cover: "https://i.ibb.co/pDtsyK3/frutillita-publicar.jpg",
    gallery: [
      "https://i.ibb.co/d4H8G8Fp/Frutillita.jpg",
      "https://i.ibb.co/JR2P0DZP/Frutillita1.jpg"
    ],
    available: true
  },
  {
    id: "granja-nena",
    name: "Granja Nena",
    tagline: "Delantal, flores y animalitos de campo.",
    category: "tematicos",
    gender: "nena",
    tags: ["animalitos"],
    cover: "https://i.ibb.co/dw33xR9Z/Granja-nena.jpg",
    gallery: [
      "https://i.ibb.co/KT8yjGm/Granja-nena.jpg",
      "https://i.ibb.co/PZyw46s0/Granja-nena1.jpg"
    ],
    available: true
  },
  {
    id: "granja-nene",
    name: "Granja Nene",
    tagline: "Botas de campo y aventuras al aire libre.",
    category: "tematicos",
    gender: "nene",
    tags: ["animalitos"],
    cover: "https://i.ibb.co/dJk9hVz3/Granja-nene.jpg",
    gallery: [],
    available: true
  },
  {
    id: "habitacion-monster-inc",
    name: "Habitación Monster Inc",
    tagline: "Puertas que esconden monstruos amigables.",
    category: "tematicos",
    gender: "todos",
    tags: ["personajes", "aventuras"],
    cover: "https://i.ibb.co/HpfJB2V4/Habitacion-Mostern-Inc.jpg",
    gallery: [],
    available: true
  },
  {
    id: "halloween",
    name: "Halloween",
    tagline: "Dulce o truco, con mucha ternura.",
    category: "tematicos",
    gender: "todos",
    tags: ["fantasia"],
    cover: "https://i.ibb.co/JjrFTznz/Halloween.jpg",
    gallery: [],
    available: true
  },
  {
    id: "harley-quinn",
    name: "Harley Quinn",
    tagline: "Una travesura con mucho estilo.",
    category: "tematicos",
    gender: "nena",
    tags: ["personajes"],
    cover: "https://i.ibb.co/fV34Z6VY/Hearley-queen.jpg",
    gallery: [],
    available: true
  },
  {
    id: "hello-kitty",
    name: "Hello Kitty",
    tagline: "Un moñito rosa y mucha dulzura.",
    category: "tematicos",
    gender: "nena",
    tags: ["personajes"],
    cover: "https://i.ibb.co/v6xHbK1z/Kity.jpg",
    gallery: [
      "https://i.ibb.co/Xx9Yt12D/Hello-kity.jpg",
      "https://i.ibb.co/TDmSzMpQ/Hello-kity1.jpg",
      "https://i.ibb.co/93BSvPtq/Hello-kity2.jpg"
    ],
    available: true
  },
  {
    id: "la-bella-y-la-bestia",
    name: "La Bella y la Bestia",
    tagline: "Una historia de amor, rosas y encanto.",
    category: "tematicos",
    gender: "nena",
    tags: ["princesas", "fantasia"],
    cover: "https://i.ibb.co/wh3LqqYR/La-bella-y-la-Bestia.jpg",
    gallery: [
      "https://i.ibb.co/wFXVFs6P/La-bella-y-la-bestia.jpg",
      "https://i.ibb.co/hRXdkvmC/La-bella-y-la-bestia1.jpg",
      "https://i.ibb.co/mVzcJpHv/La-bella-y-la-bestia2.jpg"
    ],
    available: true
  },
  {
    id: "luli-pampin",
    name: "Luli Pampin",
    tagline: "Canciones y colores para los más chiquitos.",
    category: "tematicos",
    gender: "nena",
    tags: ["personajes"],
    cover: "https://i.ibb.co/8nYVpLMS/Luli-Pampin.jpg",
    gallery: [
      "https://i.ibb.co/93S3kmQD/Luli-Pampin.jpg",
      "https://i.ibb.co/XxfXqjTJ/Luli-Pampin1.jpg",
      "https://i.ibb.co/tTzPVG1d/Luli-Pampin2.jpg"
    ],
    available: true
  },
  {
    id: "margaritas",
    name: "Margaritas",
    tagline: "Una historia dulce, luminosa y llena de flores.",
    category: "tematicos",
    gender: "nena",
    tags: ["flores"],
    cover: "https://i.ibb.co/bMwYmfmv/Margaritas.jpg",
    gallery: [
      "https://i.ibb.co/C5JNvX5V/Margarita.jpg",
      "https://i.ibb.co/gF9t1JZF/Margarita1.jpg",
      "https://i.ibb.co/KxXr5gC8/Margarita2.jpg",
      "https://i.ibb.co/4gmKvF26/Margarita3.jpg",
      "https://i.ibb.co/7dmj6bd0/Margarita4.jpg"
    ],
    available: true
  },
  {
    id: "marinero",
    name: "Marinero",
    tagline: "Rumbo a un pequeño gran viaje.",
    category: "tematicos",
    gender: "nene",
    tags: ["aventuras", "vehiculos"],
    cover: "https://i.ibb.co/KxDLVzfb/marinero.jpg",
    gallery: [
      "https://i.ibb.co/27x1RRN1/Marinero.jpg",
      "https://i.ibb.co/7xxcdmLx/Marinero1.jpg",
      "https://i.ibb.co/Kc2BV8z9/Marinero2.jpg"
    ],
    available: true
  },
  {
    id: "mariposas",
    name: "Mariposas",
    tagline: "Alas delicadas entre flores y color.",
    category: "tematicos",
    gender: "nena",
    tags: ["flores", "fantasia"],
    cover: "https://i.ibb.co/gF9vTkmr/Mariposas.jpg",
    gallery: [
      "https://i.ibb.co/Ld63jNWt/Mariposa-Lila.jpg",
      "https://i.ibb.co/Qv0vNk6H/Mariposa-Lila1.jpg",
      "https://i.ibb.co/Kxb5Qr5d/Mariposa-Lila2.jpg",
      "https://i.ibb.co/fYvMQ2NJ/Mariposa-Violeta.jpg",
      "https://i.ibb.co/bjk42Fhz/Mariposa-violeta1.jpg",
      "https://i.ibb.co/Fq0JZth9/Mariposa-violeta2.jpg"
    ],
    available: true
  },
  {
    id: "mariquita",
    name: "Mariquita",
    tagline: "Puntitos rojos y alas de la suerte.",
    category: "tematicos",
    gender: "nena",
    tags: ["animalitos", "flores"],
    cover: "https://i.ibb.co/DHJy09xd/Mariquita.jpg",
    gallery: [],
    available: true
  },
  {
    id: "masha-y-el-oso",
    name: "Masha y el Oso",
    tagline: "Travesuras y ternura en el bosque.",
    category: "tematicos",
    gender: "todos",
    tags: ["personajes", "animalitos"],
    cover: "https://i.ibb.co/KpV4538k/Masha-y-el-oso.jpg",
    gallery: [],
    available: true
  },
  {
    id: "mickey-rey",
    name: "Mickey Rey",
    tagline: "Una corona a la medida de un rey chiquito.",
    category: "tematicos",
    gender: "nene",
    tags: ["personajes"],
    cover: "https://i.ibb.co/1fvFXq76/Mickey-rey.jpg",
    gallery: [
      "https://i.ibb.co/Rk9dy5Xg/Mickey-rey.jpg",
      "https://i.ibb.co/WNh2dg5N/Mickey-rey2.jpg",
      "https://i.ibb.co/20nS0dL3/Mickey-rey3.jpg",
      "https://i.ibb.co/x8R5k6RD/Mickey-rey4.jpg"
    ],
    available: true
  },
  {
    id: "mickey-safari",
    name: "Mickey Safari",
    tagline: "Una expedición con las orejas más famosas.",
    category: "tematicos",
    gender: "nene",
    tags: ["personajes", "aventuras"],
    cover: "https://i.ibb.co/GvP1WcbT/Mickey-zafari.jpg",
    gallery: [
      "https://i.ibb.co/nNBzLLLg/Safari-Mickey-4.jpg",
      "https://i.ibb.co/mFbjNqZs/Safari-Mickey.jpg",
      "https://i.ibb.co/RTXHgFJ7/Safari-Mickey1.jpg"
    ],
    available: true
  },
  {
    id: "mickey",
    name: "Mickey",
    tagline: "El ratón más querido de todos.",
    category: "tematicos",
    gender: "nene",
    tags: ["personajes"],
    cover: "https://i.ibb.co/xvm585Y/Mickey.jpg",
    gallery: [],
    available: true
  },
  {
    id: "minnie",
    name: "Minnie",
    tagline: "Moñitos rojos y mucha dulzura.",
    category: "tematicos",
    gender: "nena",
    tags: ["personajes"],
    cover: "https://i.ibb.co/rKNX4vXc/Minnie.jpg",
    gallery: [
      "https://i.ibb.co/ycwJpLXg/Minnie-Rojo-3.jpg",
      "https://i.ibb.co/ymgY1RVp/Minnie-rojo.jpg",
      "https://i.ibb.co/rK24vwNQ/Minnie-rojo1.jpg"
    ],
    available: true
  },
  {
    id: "minions",
    name: "Minions",
    tagline: "Overoles amarillos y mucha diversión.",
    category: "tematicos",
    gender: "todos",
    tags: ["personajes"],
    cover: "https://i.ibb.co/fzsH2gDc/Minnios.jpg",
    gallery: [],
    available: true
  },
  {
    id: "monster-inc",
    name: "Monster Inc",
    tagline: "Monstruos entrañables, puro cariño.",
    category: "tematicos",
    gender: "todos",
    tags: ["personajes", "aventuras"],
    cover: "https://i.ibb.co/pvrMQfDq/monster-inc.jpg",
    gallery: [
      "https://i.ibb.co/qMHvMWmT/Monster-Inc.jpg",
      "https://i.ibb.co/JjR4rQqy/Monster-Inc1.jpg",
      "https://i.ibb.co/GvfYh44Z/Monster-Inc2.jpg"
    ],
    available: true
  },
  {
    id: "ositos-marrones",
    name: "Ositos Marrones",
    tagline: "Abrazos suaves y siesta de peluche.",
    category: "tematicos",
    gender: "todos",
    tags: ["animalitos"],
    cover: "https://i.ibb.co/21DDcZN2/Ositos-Marrones.jpg",
    gallery: [],
    available: true
  },
  {
    id: "paw-patrol",
    name: "Paw Patrol",
    tagline: "Una patrulla lista para cualquier misión.",
    category: "tematicos",
    gender: "todos",
    tags: ["personajes", "aventuras"],
    cover: "https://i.ibb.co/G4m5Kp0P/Paw-Patrol.jpg",
    gallery: [
      "https://i.ibb.co/nx4YDq5/Paw-Patrol.jpg",
      "https://i.ibb.co/HDmBt7hs/Paw-Patrol1.jpg",
      "https://i.ibb.co/FbzsM1jd/Paw-Patrol2.jpg",
      "https://i.ibb.co/Q3g3pJmQ/Paw-Patrol3.jpg"
    ],
    available: true
  },
  {
    id: "plim-plim-safari",
    name: "Plim Plim Safari",
    tagline: "El payaso más querido, de expedición.",
    category: "tematicos",
    gender: "todos",
    tags: ["personajes", "aventuras"],
    cover: "https://i.ibb.co/RThZgXvj/Plim-plim-zafari.jpg",
    gallery: [
      "https://i.ibb.co/GQ5BRkwB/Safari-plim-plim.jpg",
      "https://i.ibb.co/5gbnMZY0/Safari-plim-plim1.jpg",
      "https://i.ibb.co/JhBgkZz/Safari-plim-plim3.jpg",
      "https://i.ibb.co/cKFfbpcp/Safari-plim-plim4.jpg"
    ],
    available: true
  },
  {
    id: "plim-plim",
    name: "Plim Plim",
    tagline: "Risas y magia de circo.",
    category: "tematicos",
    gender: "todos",
    tags: ["personajes"],
    cover: "https://i.ibb.co/prsrVR6k/Plim-Plim.jpg",
    gallery: [],
    available: true
  },
  {
    id: "plim-plim-rosa",
    name: "Plim Plim Rosa",
    tagline: "La versión más dulce del payaso favorito.",
    category: "tematicos",
    gender: "nena",
    tags: ["personajes"],
    cover: "https://i.ibb.co/VpqGSNjx/Plim-Plin-Rosa.jpg",
    gallery: [],
    available: true
  },
  {
    id: "rapunzel",
    name: "Rapunzel",
    tagline: "Una trenza larga y una torre de cuento.",
    category: "tematicos",
    gender: "nena",
    tags: ["princesas", "fantasia"],
    cover: "https://i.ibb.co/TMbh0cDB/Rapunzel.jpg",
    gallery: [
      "https://i.ibb.co/9kqQjBtV/Rapunzel-1.jpg",
      "https://i.ibb.co/9H4zWwSV/Rapunzel.jpg"
    ],
    available: true
  },
  {
    id: "rey-azul",
    name: "Rey Azul",
    tagline: "Una corona pequeña para un gran rey.",
    category: "tematicos",
    gender: "nene",
    tags: ["fantasia"],
    cover: "https://i.ibb.co/cc3Nh07b/Rey-azul.jpg",
    gallery: [
      "https://i.ibb.co/Q7ZffBPt/Rey-1.jpg",
      "https://i.ibb.co/VWSNMTZY/Rey-2.jpg",
      "https://i.ibb.co/BV3gM6Yv/Rey.jpg"
    ],
    available: true
  },
  {
    id: "tinkerbell",
    name: "Tinkerbell",
    tagline: "Polvo de hada y alas de fantasía.",
    category: "tematicos",
    gender: "nena",
    tags: ["fantasia", "flores"],
    cover: "https://i.ibb.co/spD9pFPS/tinkerbell.jpg",
    gallery: [
      "https://i.ibb.co/jZ8TdhJx/Tinkerbell-1.jpg",
      "https://i.ibb.co/xtKhcWy7/Tinkerbell-2.jpg",
      "https://i.ibb.co/d0pZsgSN/Tinkerbell.jpg"
    ],
    available: true
  },
  {
    id: "vaquita-rosa",
    name: "Vaquita Rosa",
    tagline: "Un campo dulce a puro lunar.",
    category: "tematicos",
    gender: "nena",
    tags: ["animalitos"],
    cover: "https://i.ibb.co/fz1jhcFv/Vaquita-rosa.jpg",
    gallery: [
      "https://i.ibb.co/LfFZBTT/Vaquita-Granja-rosa-1.jpg",
      "https://i.ibb.co/CKbkpdbH/Vaquita-Granja-rosa-2.jpg",
      "https://i.ibb.co/Mxs3vBjY/Vaquita-Granja-rosa-3.jpg",
      "https://i.ibb.co/M5NhXgtP/Vaquita-Granja-rosa-4.jpg",
      "https://i.ibb.co/VWFgyYrk/Vaquita-Granja-rosa.jpg"
    ],
    available: true
  },
  {
    id: "winnie-pooh",
    name: "Winnie Pooh",
    tagline: "Miel, amigos y una tarde en el bosque.",
    category: "tematicos",
    gender: "todos",
    tags: ["animalitos"],
    cover: "https://i.ibb.co/4nqDtxCR/winnie-Pooh.jpg",
    gallery: [],
    available: true
  },
  {
    id: "safari",
    name: "Safari",
    tagline: "Una aventura entre animales del mundo.",
    category: "tematicos",
    gender: "todos",
    tags: ["animalitos", "aventuras"],
    cover: "https://i.ibb.co/kV46Wk4p/Zafari.jpg",
    gallery: [
      "https://i.ibb.co/zVGZKyQ8/Safari-animalitos.jpg",
      "https://i.ibb.co/mCCbyLzg/Safari-animalitos1.jpg",
      "https://i.ibb.co/fdrh7DNy/Safari-animalitos2.jpg",
      "https://i.ibb.co/KzB3kszv/Safari-animalitos3.jpg",
      "https://i.ibb.co/svvMD77V/Safari-animalitos4.jpg",
      "https://i.ibb.co/yn0XS5g8/Safari-animalitos5.jpg"
    ],
    available: true
  }
];

/* ============================================================
   DATOS GENERALES DEL ESTUDIO
   ============================================================ */
const studio = {
  name: "Estudio Fotoinfantil",
  location: "Gregorio de Laferrere · La Matanza · Buenos Aires",
  instagram: "@estudiofotoinfantil",
  instagramUrl: "https://instagram.com/estudiofotoinfantil",
  whatsapp: "5491165119034",
  whatsappDisplay: "+54 9 11 6511-9034",
  hours: "Lunes a sábado + feriados · 08:00 a 20:00",
  deposit: "$13.000",
  paymentMethods: "Efectivo y transferencia"
};

/* Packs — sección 25. Precios reales, no inventar. */
const packs = [
  {
    id: "esencial",
    name: "Pack Esencial",
    emoji: "🤍",
    price: "$63.000",
    features: [
      "Sesión de fotos de hasta 60 min",
      "+30 fotos digitales editadas"
    ],
    blurb: "Ideal si querés principalmente tus recuerdos en formato digital.",
    highlight: false
  },
  {
    id: "recuerdo",
    name: "Pack Recuerdo",
    emoji: "⭐",
    price: "$89.000",
    features: [
      "Sesión de fotos",
      "+30 fotos digitales editadas",
      "Cuadro personalizado 30×40"
    ],
    blurb: "Porque además de las fotos, te llevás un recuerdo para tener en casa.",
    highlight: true,
    highlightLabel: "El más elegido"
  },
  {
    id: "historia",
    name: "Pack Historia",
    emoji: "👑",
    price: "$119.000",
    features: [
      "Sesión de fotos",
      "+30 fotos digitales editadas",
      "Cuadro personalizado 30×40",
      "Carpeta personalizada con 5 fotos impresas",
      "Calendario personalizado 30×40"
    ],
    blurb: "La opción más completa para conservar esta etapa de diferentes maneras.",
    highlight: false
  }
];

/* Fotos reales para las secciones Mes a Mes y Pre-Añito.
   Se reutilizan fotografías del estudio ya provistas — sin inventar contenido nuevo. */
const mesAMesGallery = [
  "https://i.ibb.co/q3wJzmT1/Abejita-Chiquitita.jpg",
  "https://i.ibb.co/hxcjrWGW/Arcoiris.jpg",
  "https://i.ibb.co/CsYtWkf2/Coneja.jpg",
  "https://i.ibb.co/d4H8G8Fp/Frutillita.jpg",
  "https://i.ibb.co/zWjh2ZZk/Cerdito-Enojon.jpg",
  "https://i.ibb.co/vxb7nC2w/Cenicienta.jpg"
];

const preAnitoGallery = [
  "https://i.ibb.co/C5JNvX5V/Margarita.jpg",
  "https://i.ibb.co/93S3kmQD/Luli-Pampin.jpg",
  "https://i.ibb.co/Rk9dy5Xg/Mickey-rey.jpg",
  "https://i.ibb.co/wFXVFs6P/La-bella-y-la-bestia.jpg",
  "https://i.ibb.co/27x1RRN1/Marinero.jpg",
  "https://i.ibb.co/BV3gM6Yv/Rey.jpg"
];
