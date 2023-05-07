import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api';

const axiosInstance = axios.create({
  baseURL,
});

const officesAPI = {
  getOffices() {
    return axiosInstance.get('/offices/');
  },

  getOffice(id) {
    return axiosInstance.get(`/offices/${id}/`);
  },

  createOffice(data) {
    return axiosInstance.post('/offices/', data);
  },

  updateOffice(id, data) {
    return axiosInstance.put(`/offices/${id}/`, data);
  },

  deleteOffice(id) {
    return axiosInstance.delete(`/offices/${id}/`);
  }
};

export default officesAPI;
