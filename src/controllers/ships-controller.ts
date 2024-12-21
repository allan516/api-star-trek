import { Request, Response } from "express";
import {
  getShipsByIdService,
  getShipsService,
} from "../services/ships-service";

export const getAllShips = async (req: Request, res: Response) => {
  const response = await getShipsService();

  res.status(response.statusCode).json(response.body);
};

export const getShipsById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await getShipsByIdService(id);

  res.status(response.statusCode).json(response.body);
};
