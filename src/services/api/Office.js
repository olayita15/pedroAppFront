import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api';

const axiosInstance = axios.create({
  baseURL,
});

export default {
    getOffices() {
        return axiosInstance.get(`/offices/`);
    },

    getOffice(id) {
        return axiosInstance.get(`/offices/`+ id);
    }
};
