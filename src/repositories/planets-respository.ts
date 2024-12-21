import fs from "fs/promises";
import { PlanetModel } from "../models/planet-model";

const database = fs.readFile("./src/database/planets.json", "utf-8");

export const getPlanetsRepository = async (): Promise<PlanetModel[]> => {
  const data = JSON.parse(await database);
  return data;
};
