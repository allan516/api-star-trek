import { Request, Response } from "express";
import {
  getCharacterByIdServices,
  getCharacterServices,
} from "../services/characters-service";

export const getCharacters = async (req: Request, res: Response) => {
  const response = await getCharacterServices();
  return res.status(response.statusCode).json(response.body);
};

export const getCharactersById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await getCharacterByIdServices(id);

  return res.status(response.statusCode).json(response.body);
};
