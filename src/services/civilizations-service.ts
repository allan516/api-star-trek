import { HttpModel } from "../models/http-model";
import {
  getCivilizationsByIdRepository,
  getCivilizationsRepository,
} from "../repositories/civilizations-respository";
import * as HttpResponse from "../utils/http-response";

export const getCivilizationsService = async (): Promise<HttpModel> => {
  try {
    const data = await getCivilizationsRepository();

    if (data !== undefined) return await HttpResponse.ok(data);

    return await HttpResponse.notFound();
  } catch (error) {
    console.log(error);
    return await HttpResponse.internalServerError();
  }
};

export const getCivilizationsByIdService = async (
  id: number
): Promise<HttpModel> => {
  try {
    const data = await getCivilizationsByIdRepository(id);

    if (data !== undefined) return await HttpResponse.ok(data);

    return await HttpResponse.notFound();
  } catch (error) {
    console.log(error);
    return await HttpResponse.internalServerError();
  }
};
