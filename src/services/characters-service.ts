import { HttpModel } from "../models/http-model";
import {
  findCharacterById,
  getCharactersRepository,
} from "../repositories/characters-repositories";
import * as HttpResponse from "../utils/http-response";

export const getCharacterServices = async (): Promise<HttpModel> => {
  try {
    const data = await getCharactersRepository();
    if (data) return await HttpResponse.ok(data);

    return await HttpResponse.notFound();
  } catch (error) {
    console.log(error);
    return await HttpResponse.internalServerError();
  }
};

export const getCharacterByIdServices = async (
  id: number
): Promise<HttpModel> => {
  try {
    const data = await findCharacterById(id);
    if (data !== undefined) return await HttpResponse.ok(data);
    return await HttpResponse.notFound();
  } catch (error) {
    console.log(error);
    return await HttpResponse.internalServerError();
  }
};
