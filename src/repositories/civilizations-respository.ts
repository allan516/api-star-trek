import fs from "fs/promises";
import { CivilizationModel } from "../models/civilizations-model";

const database = fs.readFile("./src/database/civilizations.json", "utf-8");

export const getCivilizationsRepository = async (): Promise<
  CivilizationModel[]
> => {
  const data = JSON.parse(await database);
  return data;
};
