import userServices from '../services/userServices';

const userLoaders = {
    checkAuth: async () => {
        try {
            await userServices.checkAuth();
            return true;
        } catch (error) {
            return false;
        }
    },
    getUser: async () => {
        try {
            return await userServices.getUser();
        } catch (error) {
            return null;
        }
    }
}

export default userLoaders;