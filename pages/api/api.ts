import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://kaabkak.somee.com/WebAPI_Kaab_Haak/Account/Login',
  headers: {
  'Content-Type': 'application/json;charset=UTF-8',
  'Acces-control-Allow-Origin': '*'
  }
  });


export const login = async (Email: string, PassWord: string,) => {
  try {
    const response = await instance.post('/', {
      Email,
      PassWord,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
