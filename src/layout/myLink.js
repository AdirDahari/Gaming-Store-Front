import ROUTES from "../routes/ROUTES";

const MainLink = [
    { to: "/", children: "About us" },
];
const GuestLink = [
    { to: ROUTES.LOGIN, children: "Login" },
    { to: ROUTES.REGISTER, children: "Register" }
];
const ProfileLink = [
    { to: ROUTES.CREATEPOST, children: "Create post" },
    { to: "/", children: "Favourites" }
];
const ProfileMobileLink = [
    { to: "/", children: "About us" },
    { to: ROUTES.CREATEPOST, children: "Create post" },
    { to: "/", children: "Favourites" }
];
const ProfileIconLink = [
    { to: "/", children: "Profile" },
    { to: ROUTES.HOME, children: "Logout" }
];

const categories = [
    {
        name: "PlayStation",
        image: "../../../assets/img/categories/Playstation.jpg",
        alt: "PlayStation image",
        color: "blue",
    },
    {
        name: "Xbox",
        image: "../../../assets/img/categories/Xbox.jpg",
        alt: "Xbox image",
        color: "green",
    },
    {
        name: "Pc",
        image: "../../../assets/img/categories/Pc.jpg",
        alt: "Pc image",
        color: "purple",
    },
    {
        name: "Nintendo",
        image: "../../../assets/img/categories/Pc.jpg",
        alt: "Pc image",
        color: "red",
    },
];

export { MainLink, GuestLink, ProfileLink, ProfileIconLink, ProfileMobileLink, categories };
