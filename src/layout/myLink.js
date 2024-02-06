import ROUTES from "../routes/ROUTES";

const testMainLink = [
    { to: "/", children: "Home" },
    { to: "/", children: "About" },
    { to: ROUTES.LOGIN, children: "Login" },
    { to: ROUTES.REGISTER, children: "Register" }
];

const categories = [
    {
        name: "playStation",
        image: "../../../assets/img/categories/Playstation.jpg",
        alt: "PlayStation image",
    },
    {
        name: "xbox",
        image: "../../../assets/img/categories/Xbox.jpg",
        alt: "Xbox image",
    },
    {
        name: "pc",
        image: "../../../assets/img/categories/Pc.jpg",
        alt: "Pc image",
    },
];

export { testMainLink, categories };
