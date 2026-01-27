const pets = [
    {
        name: "Luna",
        animal: "Perro",
        year: 2021,
        raza: "Labrador",
        gender: "Hembra",
        size: "Grande",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog1.jpg",
        status: "En adopción"
    },
    {
        name: "Simba",
        animal: "Gato",
        year: 2022,
        raza: "Común Europeo",
        gender: "Macho",
        size: "Mediano",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/cat1.jpg",
        status: "En adopción"
    },
    {
        name: "Pipo",
        animal: "Pajaro",
        year: 2023,
        raza: "Canario",
        gender: "Macho",
        size: "Pequeño",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/bird1.jpg",
        status: "En adopción"
    },
    {
        name: "Nala",
        animal: "Perro",
        year: 2019,
        raza: "Golden Retriever",
        gender: "Hembra",
        size: "Grande",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog2.jpg",
        status: "Urgente"
    },
    {
        name: "Bolas",
        animal: "Hamster",
        year: 2023,
        raza: "Ruso",
        gender: "Macho",
        size: "Pequeño",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/hamster1.jpg",
        status: "En adopción"
    },
    {
        name: "Coco",
        animal: "Gato",
        year: 2020,
        raza: "Siamés",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/cat2.jpg",
        status: "En adopción"
    },
    {
        name: "Thor",
        animal: "Perro",
        year: 2018,
        raza: "Pastor Alemán",
        gender: "Macho",
        size: "Grande",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog3.jpg",
        status: "En adopción"
    },
    {
        name: "Mimi",
        animal: "Gato",
        year: 2021,
        raza: "Persa",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/cat3.jpg",
        status: "Adoptado"
    },
    {
        name: "Toby",
        animal: "Perro",
        year: 2022,
        raza: "Beagle",
        gender: "Macho",
        size: "Mediano",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog4.jpg",
        status: "En adopción"
    },
    {
        name: "Kira",
        animal: "Perro",
        year: 2020,
        raza: "Border Collie",
        gender: "Hembra",
        size: "Grande",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog5.jpg",
        status: "En adopción"
    },
    {
        name: "Oliver",
        animal: "Gato",
        year: 2017,
        raza: "Maine Coon",
        gender: "Macho",
        size: "Grande",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/cat4.jpg",
        status: "En adopción"
    },
    {
        name: "Tweety",
        animal: "Pajaro",
        year: 2022,
        raza: "Periquito",
        gender: "Hembra",
        size: "Pequeño",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/bird2.jpg",
        status: "En adopción"
    },
    {
        name: "Bruno",
        animal: "Perro",
        year: 2016,
        raza: "Boxer",
        gender: "Macho",
        size: "Grande",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog6.jpg",
        status: "En adopción"
    },
    {
        name: "Bella",
        animal: "Gato",
        year: 2019,
        raza: "Ragdoll",
        gender: "Hembra",
        size: "Grande",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/cat5.jpg",
        status: "Urgente"
    },
    {
        name: "Max",
        animal: "Perro",
        year: 2021,
        raza: "Chihuahua",
        gender: "Macho",
        size: "Pequeño",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog7.jpg",
        status: "En adopción"
    },
    {
        name: "Nina",
        animal: "Hamster",
        year: 2024,
        raza: "Roborovski",
        gender: "Hembra",
        size: "Pequeño",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/hamster2.jpg",
        status: "En adopción"
    },
    {
        name: "Rex",
        animal: "Perro",
        year: 2015,
        raza: "Mestizo",
        gender: "Macho",
        size: "Mediano",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog8.jpg",
        status: "En adopción"
    },
    {
        name: "Sasha",
        animal: "Gato",
        year: 2022,
        raza: "Bengala",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/cat6.jpg",
        status: "En adopción"
    },
    {
        name: "Rocky",
        animal: "Perro",
        year: 2020,
        raza: "Bulldog Francés",
        gender: "Macho",
        size: "Pequeño",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog9.jpg",
        status: "En adopción"
    },
    {
        name: "Daisy",
        animal: "Perro",
        year: 2023,
        raza: "Cocker Spaniel",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog10.jpg",
        status: "En adopción"
    },
    {
        name: "Leo",
        animal: "Gato",
        year: 2018,
        raza: "Azul Ruso",
        gender: "Macho",
        size: "Mediano",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/cat7.jpg",
        status: "En adopción"
    },
    {
        name: "Sky",
        animal: "Pajaro",
        year: 2021,
        raza: "Agapornis",
        gender: "Hembra",
        size: "Pequeño",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/bird3.jpg",
        status: "En adopción"
    },
    {
        name: "Baco",
        animal: "Perro",
        year: 2017,
        raza: "Rottweiler",
        gender: "Macho",
        size: "Grande",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog11.jpg",
        status: "En adopción"
    },
    {
        name: "Mochi",
        animal: "Gato",
        year: 2023,
        raza: "Sphynx",
        gender: "Hembra",
        size: "Mediano",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/cat8.jpg",
        status: "En adopción"
    },
    {
        name: "Zoe",
        animal: "Perro",
        year: 2022,
        raza: "Caniche",
        gender: "Hembra",
        size: "Pequeño",
        image: "https://res.cloudinary.com/demo/image/upload/v1/pets/dog12.jpg",
        status: "En adopción"
    }
];

module.exports = pets;