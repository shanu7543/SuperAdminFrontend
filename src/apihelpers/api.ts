import axios from 'axios';
// import Cookies from 'js-cookie';

import * as url from './url_helpers';


export const getLogin = async (data: any) => {
  try {
    const response = await axios.post(url.POST_LOGIN, data);
    return { success: response.status === 200, data: response.data };
  } catch (error: any) {
    console.log(error);
    return { success: false, data: error };
  }
};


// export const resetPassword = async ({
//   email,
//   password,
//   token,
// }: {
//   email: string;
//   password: string;
//   token: string;
// }) => {
//   try {
//     const response = await axiosInstance.post(url.POST_RESET_PASSWORD, {
//       email,
//       password,
//       token,
//     });
//     if (response.status === 200) return { success: true, data: response.data };

//     return { success: false, data: response.data };
//   } catch (error: any) {
//     errorHandler(error);
//     return { success: false, data: error.response, message: error.message };
//   }
// };
