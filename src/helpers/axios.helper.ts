import axios from 'axios';
import { CookiesHelper } from 'helpers';

const AxiosHelper = ({ token, ...params }: any) => {
  const cookies = new CookiesHelper();

  const authorization = token || cookies.get('current_project_token');

  const header = authorization
    ? {
        Authorization: `Bearer ${authorization}`,
        'accept-language': 'en',
      }
    : {
        'accept-language': 'en',
      };

  const data = {
    method: 'get',
    headers: header,
    ...params,
  };

  if (process.env.REACT_APP_BASE_URL_API)
    data.baseURL = `${process.env.REACT_APP_BASE_URL_API}`;

  return axios(data);
};

export default AxiosHelper;
