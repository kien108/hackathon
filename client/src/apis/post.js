import axiosClient from "./axiosClient";

const postApi = {
   send: (data) => {
      const url = "/request-send";
      return axiosClient({
         method: "post",
         url: url,
         headers: {
            "content-type": "multipart/form-data",
         },
         data,
      });
   },
};

export default postApi;
