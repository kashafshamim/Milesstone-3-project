import '../styles/globals.css';

export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Siracha",
            price: 695,
            image:
            "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1651357272-Chicken%20Tikka.jpg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 2,
            name: "Chicken Tikka",
            price: 695,
            image:
            "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1651357272-Chicken%20Tikka.jpg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 3,
            name: "Chicken Fajita",
            price: 695,
            image:
            "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1651357272-Chicken%20Tikka.jpg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 4,
            name: "Veggie Lover",
            price: 695,
            image:
            "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1651357272-Chicken%20Tikka.jpg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 5,
            name: "Super Supreme",
            price: 695,
            image:
            "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1651357272-Chicken%20Tikka.jpg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 6,
            name: "Cheese Lover",
            price: 695,
            image:
            "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1651357272-Chicken%20Tikka.jpg%3Fq%3D10&w=640&q=75",
        },
    ];

    res.status(200).json(products);
}