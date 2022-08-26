import {basicFetch, tFetch} from './index';
import endpoint from './url';

export default {
    getAll: async () => {
        return await basicFetch(endpoint.user);
    },

    create: async data => {
        return await tFetch(endpoint.user, "POST", data);
    }


}