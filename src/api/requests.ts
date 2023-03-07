import axios from 'axios';

const BASE_URL = 'https://guarded-waters-77447.herokuapp.com';

const requests = {
  get: (pathName: string) => axios.get(`${BASE_URL}${pathName}`),
};

export const getNewestPhones = () => requests.get('/phones/new');
export const getBiggestDiscounts = () => requests.get('/phones/discount');
