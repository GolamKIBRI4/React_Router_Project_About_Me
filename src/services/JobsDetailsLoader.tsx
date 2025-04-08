import apiClient from "./api-client";
import { LoaderFunctionArgs } from "react-router-dom";

export const jobsDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const res = await apiClient.get("/jobs/" + id);

  return res.data;
};
