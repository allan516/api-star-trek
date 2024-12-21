import { HttpModel } from "../models/http-model";
import { getPlanetsRepository } from "../repositories/planets-respository";
import * as HttpResponse from "../utils/http-response";

export const getPlanetsService = async (): Promise<HttpModel> => {
  const data = await getPlanetsRepository();

  if (data !== undefined) {
    return HttpResponse.ok(data);
  } else {
    return HttpResponse.notFound();
  }
};
