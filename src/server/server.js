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

const isDemoMode = false;

const server = {
    users: {
        getUsers: async () => {
            if (isDemoMode) {
                console.log("getUserById", isDemoMode);
            } else {
                return await getUsers();
            }
        },
        getUserById: async (id) => {
            if (isDemoMode) {
                console.log("getUserById", isDemoMode);
            } else {
                return await getUserById(id);
            }
        },
        postLoginUser: async (data) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await loginUser(data);
            }
        },
        deleteUser: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await deleteUser(id);
            }
        },
        putUser: async (id, data) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await editUser(id, data);
            }
        },
        pacthIsAdmin: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await updateIsAdmin(id);
            }
        },
        postCreateUser: async (data) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await createUser(data);
            }
        },
    },
    posts: {
        createPost: async (data) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await createPost(data);
            }
        },
        getPosts: async () => {
            if (isDemoMode) {
                console.log();
            } else {
                return await getPosts();
            }
        },
        putPost: async (id, data) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await editPost(id, data);
            }
        },
        deletePost: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await deletePost(id);
            }
        },
        getPostById: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await getPostById(id);
            }
        },
        getMyPosts: async () => {
            if (isDemoMode) {
                console.log();
            } else {
                return await getMyPosts();
            }
        },
        patchLikePost: async (id) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await updateLikePost(id);
            }
        },
        getPostPlatform: async (platform) => {
            if (isDemoMode) {
                console.log();
            } else {
                return await getPostsByPlatform(platform);
            }
        },
    },
};

export default server;
