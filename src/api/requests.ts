import axios from 'axios';

const BASE_URL = 'https://guarded-waters-77447.herokuapp.com';

const requests = {
  get: (pathName: string) => axios.get(`${BASE_URL}${pathName}`),
};

export const getNewestPhones = () => requests.get('/phones/new');
export const getBiggestDiscounts = () => requests.get('/phones/discount');
export const getPhonesAmount = () => requests.get('/phones/amount');
export const getPhoneDetails = (phoneId: string) => {
  return requests.get(`/phones/${phoneId}`);
};

export const getRecommended = (phoneId: string) => {
  return requests.get(`/phones/${phoneId}/recommended`);
};

export const getPhonesWithPagination = (
  sortBy: string,
  itemsNum: string,
  page: string,
) => {
  return requests.get(
    `/phones?sortBy=${sortBy}&itemsNum=${itemsNum}&page=${page}`,
  );
};
