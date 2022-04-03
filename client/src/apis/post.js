import axiosClient from "./axiosClient";

const postApi = {
   send: (data) => {
      const url = "/request";
      return axiosClient.post(url, data, {
         headers: {
            "content-type": "multipart/form-data",
         },
      });
   },
};

export default postApi;
