import { Request, Response } from "express";
import { getPlanetsService } from "../services/planets-service";

export const getAllPlanets = async (req: Request, res: Response) => {
  const response = await getPlanetsService();

  res.status(response.statusCode).json(response.body);
};
