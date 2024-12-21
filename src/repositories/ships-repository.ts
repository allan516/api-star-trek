import fs from "fs/promises";
import { ShipModel } from "../models/ship-model";

const data = fs.readFile("./src/database/ships.json", "utf8");

export const getShipsRepository = async (): Promise<ShipModel[]> => {
  const database = JSON.parse(await data);
  return database;
};
