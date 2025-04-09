import apiClient from "./api-client";
import { LoaderFunctionArgs } from "react-router-dom";

export const jobsDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  try {
    const res = await apiClient.get("/jobs/" + id);

    return res.data;
  } catch {
    throw new Response("Could not fetch job details");
  }
};
