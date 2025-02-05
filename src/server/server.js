import {
    createUser,
    deleteUser,
    editUser,
    getUserById,
    getUsers,
    loginUser,
    updateIsAdmin,
} from "./realServer/users";
import {
    createPost,
    deletePost,
    editPost,
    getMyPosts,
    getPostById,
    getPosts,
    getPostsByPlatform,
    updateLikePost,
} from "./realServer/posts";

const isDevEnv = true;
const isDemoMode = isDevEnv && import.meta.env.VITE_MODE == "demo";

const server = {
    users: {
        getUsers: async () => {
            if (isDemoMode) {
                console.log("getUserById", isDemoMode);
            } else {
                await getUsers();
            }
        },
        getUserById: async (id) => {
            if (isDemoMode) {
                console.log("getUserById", isDemoMode);
            } else {
                await getUserById(id);
            }
        },
        postLoginUser: async (data) => {
            if (isDemoMode) {
                console.log();
            } else {
                await loginUser(data);
            }
        },
        deleteUser: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                await deleteUser(id);
            }
        },
        putUser: async (id, data) => {
            if (isDemoMode) {
                console.log();
            } else {
                await editUser(id, data);
            }
        },
        pacthIsAdmin: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                await updateIsAdmin(id);
            }
        },
        postCreateUser: async (data) => {
            if (isDemoMode) {
                console.log();
            } else {
                await createUser(data);
            }
        },
    },
    posts: {
        createPost: async (data) => {
            if (isDemoMode) {
                console.log();
            } else {
                await createPost(data);
            }
        },
        getPosts: async () => {
            if (isDemoMode) {
                console.log();
            } else {
                await getPosts();
            }
        },
        putPost: async (id, data) => {
            if (isDemoMode) {
                console.log();
            } else {
                await editPost(id, data);
            }
        },
        deletePost: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                await deletePost(id);
            }
        },
        getPostById: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                await getPostById(id);
            }
        },
        getMyPosts: async () => {
            if (isDemoMode) {
                console.log();
            } else {
                await getMyPosts();
            }
        },
        patchLikePost: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                await updateLikePost(id);
            }
        },
        getPostPlatform: async (platform) => {
            if (isDemoMode) {
                console.log();
            } else {
                await getPostsByPlatform(platform);
            }
        },
    },
};

export default server;
