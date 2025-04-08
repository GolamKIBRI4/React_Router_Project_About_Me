import apiClient from "./api-client";
export const jobsLoader = async () => {
    const res = await apiClient.get("/jobs");
    return res.data;
  };
  