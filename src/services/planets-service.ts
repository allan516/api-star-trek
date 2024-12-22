import { HttpModel } from "../models/http-model";
import { getPlanetsRepository } from "../repositories/planets-respository";
import * as HttpResponse from "../utils/http-response";

export const getPlanetsService = async (): Promise<HttpModel> => {
  try {
    const data = await getPlanetsRepository();

    if (data !== undefined) return await HttpResponse.ok(data);

    return await HttpResponse.notFound();
  } catch (error) {
    console.log(error);
    return await HttpResponse.internalServerError();
  }
};
