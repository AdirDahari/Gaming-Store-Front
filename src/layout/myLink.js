import ROUTES from "../routes/ROUTES";

const testMainLink = [
    { to: "/", children: "Home" },
    { to: "/", children: "About" },
    { to: ROUTES.LOGIN, children: "Login" },
    { to: ROUTES.REGISTER, children: "Register" }
];

const categories = [
    {
        to: "/",
        name: "playStation",
        image: "../../../assets/img/categories/Playstation.jpg",
        alt: "PlayStation image",
    },
    {
        to: "/",
        name: "xbox",
        image: "../../../assets/img/categories/Xbox.jpg",
        alt: "Xbox image",
    },
    {
        to: "/",
        name: "pc",
        image: "../../../assets/img/categories/Pc.jpg",
        alt: "Pc image",
    },
];

export { testMainLink, categories };
