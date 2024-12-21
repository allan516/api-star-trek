import { HttpModel } from "../models/http-model";
import { getShipsRepository } from "../repositories/ships-repository";
import * as HttpResponse from "../utils/http-response";

export const getShipsService = async (): Promise<HttpModel> => {
  const data = await getShipsRepository();

  if (data !== undefined) {
    return HttpResponse.ok(data);
  } else {
    return HttpResponse.notFound();
  }
};

export const getShipsByIdService = async (id: number): Promise<HttpModel> => {
  const data = await getShipsRepository();
  const ship = --id;
  if (data[ship] !== undefined) {
    return HttpResponse.ok(data[ship]);
  } else {
    return HttpResponse.notFound();
  }
};
