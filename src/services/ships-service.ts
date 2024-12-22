import { HttpModel } from "../models/http-model";
import { getShipsRepository } from "../repositories/ships-repository";
import * as HttpResponse from "../utils/http-response";

export const getShipsService = async (): Promise<HttpModel> => {
  try {
    const data = await getShipsRepository();

    if (data !== undefined) return await HttpResponse.ok(data);
    return await HttpResponse.notFound();
  } catch (error) {
    console.log(error);
    return await HttpResponse.internalServerError();
  }
};

export const getShipsByIdService = async (id: number): Promise<HttpModel> => {
  try {
    const data = await getShipsRepository();
    const ship = --id;
    if (data[ship] !== undefined) return await HttpResponse.ok(data[ship]);
    return await HttpResponse.notFound();
  } catch (error) {
    console.log(error);
    return await HttpResponse.internalServerError();
  }
};
