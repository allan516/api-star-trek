import { HttpModel } from "../models/http-model";
import {
  findCharacterById,
  getCharactersRepository,
} from "../repositories/characters-repositories";
import * as HttpResponse from "../utils/http-response";

export const getCharacterServices = async (): Promise<HttpModel> => {
  const data = await getCharactersRepository();
  if (data) {
    const response = HttpResponse.ok(data);
    return response;
  } else {
    const response = HttpResponse.notFound();
    return response;
  }
};

export const getCharacterByIdServices = async (
  id: number
): Promise<HttpModel> => {
  const data = await findCharacterById(id);
  if (data !== undefined) {
    const response = await HttpResponse.ok(data);
    return response;
  } else {
    const response = await HttpResponse.notFound();
    return response;
  }
};
