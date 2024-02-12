import ROUTES from "../routes/ROUTES";

const testMainLink = [
    { to: ROUTES.HOME, children: "Home" },
    { to: "/", children: "About" },
    { to: ROUTES.LOGIN, children: "Login" },
    { to: ROUTES.REGISTER, children: "Register" }
];

const categories = [
    {
        name: "PlayStation",
        image: "../../../assets/img/categories/Playstation.jpg",
        alt: "PlayStation image",
        color: "blue"
    },
    {
        name: "Xbox",
        image: "../../../assets/img/categories/Xbox.jpg",
        alt: "Xbox image",
        color: "green"
    },
    {
        name: "Pc",
        image: "../../../assets/img/categories/Pc.jpg",
        alt: "Pc image",
        color: "purple"
    },
    {
        name: "Nintendo",
        image: "../../../assets/img/categories/Pc.jpg",
        alt: "Pc image",
        color: "red"
    },
];

export { testMainLink, categories };
