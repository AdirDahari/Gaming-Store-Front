import ROUTES from "../routes/ROUTES.JS";
import LoginIcon from "@mui/icons-material/Login";
import PostAddIcon from '@mui/icons-material/PostAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

const MainLink = [
    { to: ROUTES.ABOUT, children: "About us" },
];
const MainAdminLink = [
    { to: ROUTES.ABOUT, children: "About us" },
    { to: ROUTES.MANAGMENT, children: "Managment" },
]
const GuestLink = [
    { to: ROUTES.REGISTER, children: "Register", icon: AppRegistrationIcon },
    { to: ROUTES.LOGIN, children: "Login", icon: LoginIcon },

];
const GuestMobileLink = [
    { to: ROUTES.ABOUT, children: "About us", icon: InfoIcon },
    { to: ROUTES.LOGIN, children: "Login", icon: LoginIcon },
    { to: ROUTES.REGISTER, children: "Register", icon: AppRegistrationIcon }
]
const ProfileLink = [
    { to: ROUTES.CREATEPOST, children: "Create post", icon: PostAddIcon },
    { to: ROUTES.FAVOURITES, children: "Favourites", icon: FavoriteIcon }
];
const ProfileMobileLink = [
    { to: ROUTES.ABOUT, children: "About us", icon: InfoIcon },
    { to: ROUTES.CREATEPOST, children: "Create post", icon: PostAddIcon },
    { to: ROUTES.FAVOURITES, children: "Favourites", icon: FavoriteIcon }
];
const ProfileMobileAdminLink = [
    { to: ROUTES.ABOUT, children: "About us", icon: InfoIcon },
    { to: ROUTES.CREATEPOST, children: "Create post", icon: PostAddIcon },
    { to: ROUTES.FAVOURITES, children: "Favourites", icon: FavoriteIcon },
    { to: ROUTES.MANAGMENT, children: "Managment", icon: ManageAccountsIcon },
];
const ProfileIconLink = [
    { to: ROUTES.PROFILE, children: "Profile", icon: AccountBoxIcon },
    { to: ROUTES.HOME, children: "Logout", icon: LogoutIcon }
];

const categories = [
    {
        name: "Playstation",
        image: "/assets/img/categories/Playstation.png",
        alt: "PlayStation image",
        color: "#0E86D4",
    },
    {
        name: "Xbox",
        image: "/assets/img/categories/Xbox.png",
        alt: "Xbox image",
        color: "#56ae60",
    },
    {
        name: "Pc",
        image: "/assets/img/categories/Pc.png",
        alt: "Pc image",
        color: "#9370DB",
    },
    {
        name: "Nintendo",
        image: "/assets/img/categories/nintendo.png",
        alt: "Pc image",
        color: "#ED2939",
    },
];

export { MainLink, GuestLink, ProfileLink, ProfileIconLink, ProfileMobileLink, GuestMobileLink, MainAdminLink, ProfileMobileAdminLink, categories };
