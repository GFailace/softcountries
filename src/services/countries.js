import api from "./api";

export default {
  get: async () => {
    const response = await api
      .get("/all")
      .then(({ ...response }) => response)
      .catch(({ ...response }) => response);

    return response;
  },
};
