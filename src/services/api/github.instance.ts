import axios_ from 'axios';

import { apiUrl } from '../../constants/apiUrl';

export const instance = axios_.create({
  baseURL: apiUrl,
});
