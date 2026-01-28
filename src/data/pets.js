const pets = [
    {
        name: "Luna",
        animal: "Perro",
        year: 2021,
        raza: "Labrador",
        gender: "Hembra",
        size: "Grande",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626415/1_luna_labrador_w16zqw.jpg",
        status: "En adopción"
    },
    {
        name: "Simba",
        animal: "Gato",
        year: 2022,
        raza: "Común Europeo",
        gender: "Macho",
        size: "Mediano",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626414/2_simba_gato_k84axn.jpg",
        status: "En adopción"
    },
    {
        name: "Pipo",
        animal: "Pajaro",
        year: 2023,
        raza: "Canario",
        gender: "Macho",
        size: "Pequeño",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626414/3_pipo_canario_h9ehtm.jpg",
        status: "En adopción"
    },
    {
        name: "Nala",
        animal: "Perro",
        year: 2019,
        raza: "Golden Retriever",
        gender: "Hembra",
        size: "Grande",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626413/4_nala_golden_fyucqh.jpg",
        status: "Urgente"
    },
    {
        name: "Bolas",
        animal: "Hamster",
        year: 2023,
        raza: "Ruso",
        gender: "Macho",
        size: "Pequeño",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626413/5_bolas_hamster_gloqxf.jpg",
        status: "En adopción"
    },
    {
        name: "Coco",
        animal: "Gato",
        year: 2020,
        raza: "Siamés",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626412/6_coco_siames_pjfaxk.jpg",
        status: "En adopción"
    },
    {
        name: "Thor",
        animal: "Perro",
        year: 2018,
        raza: "Pastor Alemán",
        gender: "Macho",
        size: "Grande",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626412/7_thor_pastor_zhbbrk.jpg",
        status: "En adopción"
    },
    {
        name: "Mimi",
        animal: "Gato",
        year: 2021,
        raza: "Persa",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626412/8_mimi_persa_r6nud3.jpg",
        status: "Adoptado"
    },
    {
        name: "Toby",
        animal: "Perro",
        year: 2022,
        raza: "Beagle",
        gender: "Macho",
        size: "Mediano",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626412/9_toby_beagle_gayrbu.jpg",
        status: "En adopción"
    },
    {
        name: "Kira",
        animal: "Perro",
        year: 2020,
        raza: "Border Collie",
        gender: "Hembra",
        size: "Grande",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626412/10_kira_border_collie_qrw3nd.jpg",
        status: "En adopción"
    },
    {
        name: "Oliver",
        animal: "Gato",
        year: 2017,
        raza: "Maine Coon",
        gender: "Macho",
        size: "Grande",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626411/11_oliver_Maine_Coon_qjrjnf.jpg",
        status: "En adopción"
    },
    {
        name: "Tweety",
        animal: "Pajaro",
        year: 2022,
        raza: "Periquito",
        gender: "Hembra",
        size: "Pequeño",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626409/12_tweety_Periquito_fouziq.jpg",
        status: "En adopción"
    },
    {
        name: "Bruno",
        animal: "Perro",
        year: 2016,
        raza: "Boxer",
        gender: "Macho",
        size: "Grande",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626409/13_bruno_Boxer_zuoinp.jpg",
        status: "En adopción"
    },
    {
        name: "Bella",
        animal: "Gato",
        year: 2019,
        raza: "Ragdoll",
        gender: "Hembra",
        size: "Grande",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626410/14_bella_Ragdoll_wvmku6.jpg",
        status: "Urgente"
    },
    {
        name: "Max",
        animal: "Perro",
        year: 2021,
        raza: "Chihuahua",
        gender: "Macho",
        size: "Pequeño",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626410/15_max_Chihuahua_emjkjr.jpg",
        status: "En adopción"
    },
    {
        name: "Nina",
        animal: "Hamster",
        year: 2024,
        raza: "Roborovski",
        gender: "Hembra",
        size: "Pequeño",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626409/16_hamster_Roborovski_mkdlje.jpg",
        status: "En adopción"
    },
    {
        name: "Rex",
        animal: "Perro",
        year: 2015,
        raza: "Mestizo",
        gender: "Macho",
        size: "Mediano",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626410/17_rex_Mestizo_qffvdf.jpg",
        status: "En adopción"
    },
    {
        name: "Sasha",
        animal: "Gato",
        year: 2022,
        raza: "Bengala",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626408/18_sasha_Bengala_uumwdh.jpg",
        status: "En adopción"
    },
    {
        name: "Rocky",
        animal: "Perro",
        year: 2020,
        raza: "Bulldog Francés",
        gender: "Macho",
        size: "Pequeño",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626408/19_rocky_Bulldog_Franc%C3%A9s_kxwvqm.jpg",
        status: "En adopción"
    },
    {
        name: "Daisy",
        animal: "Perro",
        year: 2023,
        raza: "Cocker Spaniel",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626407/20_Daisy_Cocker_Spaniel_ex54qp.jpg",
        status: "En adopción"
    },
    {
        name: "Leo",
        animal: "Gato",
        year: 2018,
        raza: "Azul Ruso",
        gender: "Macho",
        size: "Mediano",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626407/21_leo_azul_ruso_rgekp5.jpg",
        status: "En adopción"
    },
    {
        name: "Sky",
        animal: "Pajaro",
        year: 2021,
        raza: "Agapornis",
        gender: "Hembra",
        size: "Pequeño",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626407/22_sky_Agapornis_rbvx1l.jpg",
        status: "En adopción"
    },
    {
        name: "Baco",
        animal: "Perro",
        year: 2017,
        raza: "Rottweiler",
        gender: "Macho",
        size: "Grande",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626407/23_baco_Rottweiler_afeysk.jpg",
        status: "En adopción"
    },
    {
        name: "Mochi",
        animal: "Gato",
        year: 2023,
        raza: "Sphynx",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626407/24_mochi_Sphynx_uxlavm.jpg",
        status: "En adopción"
    },
    {
        name: "Zoe",
        animal: "Perro",
        year: 2022,
        raza: "Caniche",
        gender: "Hembra",
        size: "Pequeño",
        image: "https://res.cloudinary.com/dr882vpxg/image/upload/v1769626407/25_zoe_Caniche_c5vkiy.jpg",
        status: "En adopción"
    }
];

module.exports = pets;