import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getClients = () => axios.get(`${API_URL}/clients`);
export const createClient = (client) => axios.post(`${API_URL}/clients`, client);

export const getBarbers = () => axios.get(`${API_URL}/barbers`);
export const createBarber = (barber) => axios.post(`${API_URL}/barbers`, barber);

export const getAppointments = () => axios.get(`${API_URL}/appointments`);
export const createAppointment = (appointment) => axios.post(`${API_URL}/appointments`, appointment);