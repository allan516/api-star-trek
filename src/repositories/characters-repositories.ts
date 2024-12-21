import { CharacterModel } from "../models/character-model";
import fs from "fs/promises";

const database = fs.readFile("./src/database/characters.json", "utf-8");

export const getCharactersRepository = async (): Promise<CharacterModel[]> => {
  const data = JSON.parse(await database) as CharacterModel[];
  return data;
};

export const findCharacterById = async (
  id: number
): Promise<CharacterModel> => {
  const data = JSON.parse(await database) as CharacterModel[];

  const ids = data.findIndex((value) => {
    return value.id === id;
  });
  return data[ids];
};
