import api from "./api";

export default {
  get: async ({ country }) => {
    const response = await api
      .get(`/name/${country}`)
      .then(({ ...response }) => response)
      .catch(({ ...response }) => response);

    return response;
  },
};
