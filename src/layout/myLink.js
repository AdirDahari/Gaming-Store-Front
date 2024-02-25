import ROUTES from "../routes/ROUTES.JS";
import LoginIcon from "@mui/icons-material/Login";
import PostAddIcon from '@mui/icons-material/PostAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

const MainLink = [
    { to: "/", children: "About us" },
];
const GuestLink = [
    { to: ROUTES.REGISTER, children: "Register", icon: AppRegistrationIcon },
    { to: ROUTES.LOGIN, children: "Login", icon: LoginIcon },

];
const GuestMobileLink = [
    { to: "/", children: "About us", icon: InfoIcon },
    { to: ROUTES.LOGIN, children: "Login", icon: LoginIcon },
    { to: ROUTES.REGISTER, children: "Register", icon: AppRegistrationIcon }
]
const ProfileLink = [
    { to: ROUTES.CREATEPOST, children: "Create post", icon: PostAddIcon },
    { to: ROUTES.FAVOURITES, children: "Favourites", icon: FavoriteIcon }
];
const ProfileMobileLink = [
    { to: "/", children: "About us", icon: InfoIcon },
    { to: ROUTES.CREATEPOST, children: "Create post", icon: PostAddIcon },
    { to: ROUTES.FAVOURITES, children: "Favourites", icon: FavoriteIcon }
];
const ProfileIconLink = [
    { to: ROUTES.PROFILE, children: "Profile", icon: AccountBoxIcon },
    { to: ROUTES.HOME, children: "Logout", icon: LogoutIcon }
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

export { MainLink, GuestLink, ProfileLink, ProfileIconLink, ProfileMobileLink, GuestMobileLink, categories };
