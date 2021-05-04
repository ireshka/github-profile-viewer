import axios_ from 'axios';

import { apiUrl } from '../../constants/apiUrl';

export const axios = axios_.create({
  baseURL: apiUrl,
});
