import userServices from '../services/userServices';

const userLoaders = {
    checkAuth: async () => {
        try {
            await userServices.checkAuth();
            return true;
        } catch (error) {
            return false;
        }
    }
}

export default userLoaders;