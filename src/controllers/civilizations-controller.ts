import { Request, Response } from "express";
import {
  getCivilizationsByIdService,
  getCivilizationsService,
} from "../services/civilizations-service";

export const getAllCivilizations = async (req: Request, res: Response) => {
  const response = await getCivilizationsService();

  res.status(response.statusCode).json(response.body);
};

export const getCivilizationsById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await getCivilizationsByIdService(id);
  res.status(response.statusCode).json(response.body);
};
