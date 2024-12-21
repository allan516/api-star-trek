import { HttpModel } from "../models/http-model";

export const ok = async (data: any): Promise<HttpModel> => {
  return { statusCode: 200, body: data };
};

export const notFound = async (): Promise<HttpModel> => {
  return { statusCode: 404, body: { error: "Not found" } };
};
