import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api';

const axiosInstance = axios.create({
  baseURL,
});

export default {
  getEmployees() {
    return axiosInstance.get('/employees/');
  },

  getEmployee(id) {
    return axiosInstance.get(`/employees/${id}`+`/`);
  },

  createEmployee(data) {
    return axiosInstance.post('/employees/', data);
  },

  updateEmployee(id, data) {
    return axiosInstance.put(`/employees/${id}`+`/`, data);
  },

  deleteEmployee(id) {
    return axiosInstance.delete(`/employees/${id}`+`/`);
  },
};
