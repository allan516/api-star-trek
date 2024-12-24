import { Router } from "express";
import * as characterController from "./controllers/characters-controller";
import * as shipsController from "./controllers/ships-controller";

import * as civilizationController from "./controllers/civilizations-controller";

const router = Router();

router.get("/characters", characterController.getCharacters);
router.get("/characters/:id", characterController.getCharactersById);
router.get("/ships", shipsController.getAllShips);
router.get("/ships/:id", shipsController.getShipsById);
router.get("/civilizations", civilizationController.getAllCivilizations);

export default router;
