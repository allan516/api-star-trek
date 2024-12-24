import { Request, Response } from "express";
import { getCivilizationsService } from "../services/civilizations-service";

export const getAllCivilizations = async (req: Request, res: Response) => {
  const response = await getCivilizationsService();

  res.status(response.statusCode).json(response.body);
};
